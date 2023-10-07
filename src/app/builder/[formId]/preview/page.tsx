'use client';
import { useMemo } from 'react';
import { Form } from '@quillforms/renderer-core';
import '@quillforms/renderer-core/build-style/style.css';

import { registerCoreBlocks } from '@quillforms/react-renderer-utils'; // eslint-disable-line
import { useFormBuilderStore } from '@/hooks/useFormBuiler';
import { getFormBlocks } from '@/core/form-builder';

let registered = false;

if (!registered) {
  registered = true;
  registerCoreBlocks();
}

export default function BuilderPreviewPage() {
  const { nodes, edges } = useFormBuilderStore();
  const formObj = useMemo(
    () => ({ blocks: getFormBlocks({ nodes, edges }) }),
    [nodes, edges]
  );

  return (
    <Form
      applyLogic={false}
      formObj={formObj}
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
