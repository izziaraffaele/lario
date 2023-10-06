import { NodeProps } from 'reactflow';
import { FormNode, FormNodeType } from '@/core/form-builder';

export type FormNodeProps<T extends FormNode = FormNode> = NodeProps<
  T['data']
> & { icon?: string | React.ReactNode };

export type FormNodeToolbarProps = {
  type: string;
  label: string;
  icon: string | React.ReactNode;
};

export type FormNodePanelProps<T extends FormNode = FormNode> = Pick<
  T,
  'id' | 'type' | 'data'
> & {
  onSave: (data: T['data']) => void;
};

export type BuilderType<T extends FormNodeType<any> = FormNodeType> = {
  nodeType: T;
  icon: string | React.ReactNode;
  components: {
    panel: React.FC<FormNodePanelProps>;
    node: React.FC<FormNodeProps>;
  };
};
