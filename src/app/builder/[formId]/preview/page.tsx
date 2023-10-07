'use client';
import { useMemo } from 'react';
import { Form } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';

import { useFormBuilderStore } from '@/hooks/useFormBuilder';
import { getFormBlocks } from '@/core/form-builder';
import {
  registerBlocks,
  connectWalletBlock,
  workflowBlock,
} from '@/components/quillform-blocks';
import {
  ExecuteFunction,
  StepArray,
  makeStep,
  makeWorkflow,
} from '@/hooks/useWorkflow';
import { verifyWeb3WorkflowStep } from './actions';
import { useAccount } from 'wagmi';

let registered = false;

const mockedFunc = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
const boolStepHandler =
  (func: ExecuteFunction) => async (ctx: { wallet: string }) => {
    const result = await func(ctx);

    if (result === false) {
      throw new Error('Error message');
    }
  };

if (!registered) {
  registered = true;
  registerBlocks([connectWalletBlock, workflowBlock]);
}

export default function BuilderPreviewPage() {
  const { nodes, edges } = useFormBuilderStore();
  const { address } = useAccount();

  const formObj = useMemo(() => {
    const blocks = getFormBlocks({ nodes, edges }).map((block) => {
      const attributes = { ...block.attributes };

      if (block.name === 'workflow') {
        const workflowStepDefinition = block.attributes?.workflow as {
          type: string;
          label: string;
          attributes: Record<string, unknown>[];
        }[];

        const steps: StepArray = workflowStepDefinition.map((def) =>
          makeStep({
            label: def.label,
            func: boolStepHandler((ctx) =>
              verifyWeb3WorkflowStep(def.type as any, ctx, def.attributes)
            ),
            // func: mockedFunc,
          })
        );

        attributes.workflow = makeWorkflow({
          getContext: () => ({ wallet: address }),
          steps: steps,
        });
      }
      return { ...block, attributes };
    });

    return { blocks };
  }, [nodes, edges, address]);

  return (
    <Form
      applyLogic={false}
      formObj={{ ...formObj }}
      formId={1}
      onSubmit={(
        data,
        { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }
      ) => {
        setTimeout(() => {
          setIsSubmitting(false);
          completeForm();
        }, 500);
      }}
    />
  );
}
