import { useForm, Controller } from 'react-hook-form';
import { useFormBuilderStore } from '@/hooks/useFormBuiler';
import { FormProvider } from '@/components/form';

import { Button, Stack, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormNode } from '@/core/form-builder';
import { WorkflowStepBuilder } from '../WorkflowStepBuilder';

type FormValuesProps = {
  label: string;
  description?: string;
  workflow?: string;
};

export type FormNodePanelProps<T extends FormNode = FormNode> = Pick<
  T,
  'id' | 'type' | 'data'
> & {
  onSave: (data: T['data']) => void;
};

export function FormNodePanel({
  id,
  type,
  data,
}: React.PropsWithChildren<FormNodePanelProps>) {
  const { updateNode } = useFormBuilderStore();
  const methods = useForm<FormValuesProps>({
    defaultValues: {
      label: data.attributes?.label || '',
      description: data.attributes?.description || '',
    },
  });

  const onSubmit = (newAttributes: FormValuesProps) => {
    updateNode(id, { ...data.attributes, ...newAttributes });
  };
  return (
    <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Stack
        direction="column"
        spacing={2}
        flex={1}
        sx={{ overflow: 'scroll', py: 2 }}
      >
        <Controller
          name="label"
          control={methods.control}
          render={({ field }) => (
            <TextField size="small" label="Label" {...field} />
          )}
        />
        <Controller
          name="description"
          control={methods.control}
          render={({ field }) => (
            <TextField label="Description" multiline rows={3} {...field} />
          )}
        />

        {type === 'workflow' && (
          <Controller
            name="workflow"
            control={methods.control}
            render={({ field }) => <WorkflowStepBuilder />}
          />
        )}

        <Button type="submit" variant="contained" size="small" color="primary">
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
}
