import React from 'react';

export enum Status {
  INITIAL = 'Initial',
  PROGRESS = 'Progress',
  ERROR = 'Error',
  COMPLETE = 'Complete',
}

export type GetContextFunction = ({
  stepNumber,
}: {
  stepNumber: number;
}) => any;

export type StepArray = Array<Step>;

export type Workflow = {
  steps: StepArray;
  getContext?: GetContextFunction;
  guardArray?: Array<any>;
};

export type ExecuteFunction = (context?: any) => any | Promise<any>;
// export type VerifyFunction = (context?: any) => boolean | Promise<boolean>

export type Step = {
  label: string;
  description?: string;
  value?: string;
  status: Status;
  func: ExecuteFunction;
  // verify?: VerifyFunction
};

export type ExecutionState = {
  running: boolean;
  statuses: Status[];
};

function workflowReducer(
  state: ExecutionState,
  action: { type: string; stepIndex?: number }
) {
  switch (action.type) {
    case 'start':
      return { running: true, statuses: [] };
    case 'step-start':
      return { ...state, statuses: [...state.statuses, Status.PROGRESS] };
    case 'step-complete':
      return {
        ...state,
        statuses: state.statuses.map((s, i) =>
          i === action.stepIndex ? Status.COMPLETE : s
        ),
      };
    case 'step-error':
      return {
        ...state,
        statuses: state.statuses.map((s, i) =>
          i === action.stepIndex ? Status.ERROR : s
        ),
      };
    case 'stop':
      return { ...state, running: false };
    default:
      return state;
  }
}

export const useWorkflow = ({
  steps,
  getContext,
  guardArray = [],
}: Workflow) => {
  /**
   * Main entry point to execute a workflow.
   *
   * @param {{steps}} the sequence of Step objects to execute.
   * @param {{getContext}} lets you specify the execution context for a function
   * @param {{guardArray}} gets passed as the last argument to React.useEffect
   */
  const [state, dispatch] = React.useReducer(workflowReducer, {
    running: false,
    statuses: [],
  });

  React.useEffect(() => {
    console.log('execute');
    const execute = async () => {
      for (let i = 0; i < steps.length; i++) {
        dispatch({ type: 'step-start', stepIndex: i });
        try {
          const executionContext = getContext
            ? await getContext({ stepNumber: i })
            : {};
          await steps[i].func(executionContext);
          dispatch({ type: 'step-complete', stepIndex: i });
        } catch (exc) {
          console.warn('Error: ', exc);
          dispatch({ type: 'step-error', stepIndex: i });
          break;
        }
      }

      dispatch({ type: 'stop' });
    };

    if (state.running)
      execute()
        .then(() => {
          return state;
        })
        .catch((err) => {
          console.info('error');
          throw err;
        });
  }, [...guardArray, state.running]); // eslint-disable-line

  return {
    state,
    dispatch,
  };
};

export const makeStep = ({
  label,
  value,
  ...data
}: { label: string; func: ExecuteFunction } & Partial<Step>) => ({
  label,
  value: value || label.replace(' ', '_').toUpperCase(),
  status: Status.INITIAL,
  ...data,
});

export const makeWorkflow = ({
  steps,
  getContext = undefined,
  guardArray = undefined,
}: {
  steps: Omit<Step, 'status'>[];
  getContext?: GetContextFunction;
  guardArray?: Array<any>;
}): Workflow => {
  /**
   * Helper function to create the proper workflow data structure.
   */
  return {
    steps: steps.map(makeStep),
    getContext: typeof getContext === 'function' ? getContext : () => {},
    guardArray: guardArray || [],
  };
};
