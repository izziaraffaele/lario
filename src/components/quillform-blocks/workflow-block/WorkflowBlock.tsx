import { useCallback, useEffect, useMemo } from 'react';
import { useTheme } from '@quillforms/renderer-core';
import classnames from 'classnames';
import { CircularProgress } from '@mui/material';

import { Status, useWorkflow, Workflow } from '@/hooks/useWorkflow';
import { QuillformButton } from '../QuillformButton';
import { Icon } from '@/components/Icon';

import { BlockTypeDisplayProps } from '../types';
import './styles.css';

export type WorkflowBlockProps = BlockTypeDisplayProps & {
  attributes: { workflow: Workflow };
};

export function WorkflowBlock(props: WorkflowBlockProps) {
  const {
    setIsAnswered,
    showNextBtn,
    setIsValid,
    setValidationErr,
    showErrMsg,
    attributes,
  } = props;

  const workflow = useWorkflow(attributes.workflow);
  const theme = useTheme();

  const handleStart = useCallback(() => {
    workflow.dispatch({ type: 'start' });
  }, [workflow]);

  const isCompleted = useMemo(
    () =>
      !workflow.state.running &&
      workflow.state.statuses.length > 0 &&
      workflow.state.statuses.every((i) => i === Status.COMPLETE),
    [workflow.state]
  );

  const hasError = useMemo(
    () => workflow.state.statuses.some((i) => i === Status.ERROR),
    [workflow.state]
  );

  useEffect(() => {
    setIsAnswered(false);
    showNextBtn(false);
    if (attributes.required) {
      setIsValid(false);
      setValidationErr('The field is required!');
    }
  }, []); // eslint-disable-line

  useEffect(() => {
    if (isCompleted) {
      setIsAnswered(true);
      showNextBtn(true);
      setIsValid(true);
      showErrMsg(false);
    }
  }, [isCompleted]); // eslint-disable-line

  return (
    <div className="workflow-block">
      <ul className="workflow-block__steps">
        {attributes.workflow.steps.map((step, i) => {
          const status = workflow.state.statuses[i];
          return (
            <li
              key={i}
              className={classnames(
                'workflow-block__step',
                status === Status.COMPLETE && 'workflow-block__step--complete',
                status === Status.PROGRESS && 'workflow-block__step--progress',
                status === Status.ERROR && 'workflow-block__step--error'
              )}
            >
              {step.label}
              <CircularProgress />
              <Icon
                icon="fluent-mdl2:completed"
                className={classnames('workflow-block__step-icon', 'success')}
                color={theme.answersColor}
              />
              <Icon
                icon="fluent-mdl2:error"
                className={classnames('workflow-block__step-icon', 'error')}
                color={theme.errorsBgColor}
              />
            </li>
          );
        })}
      </ul>
      {!isCompleted && (
        <QuillformButton
          disabled={workflow.state.running}
          onClick={handleStart}
        >
          {workflow.state.running
            ? 'Verifying...'
            : !hasError
            ? 'Start'
            : 'Try again'}
        </QuillformButton>
      )}
    </div>
  );
}
