import { Handle, Position } from 'reactflow';
import { Icon } from '../Icon';
import { FormNodeTypeItem } from './FormNodeTypeItem';
import { FormNodeProps } from './types';

export type FormNodeItemProps = FormNodeProps;

const DEFAULT_ICON = <Icon icon="octicon:package-16" />;

export const withDefaults =
  (defaultProps: Partial<FormNodeItemProps>) => (props: FormNodeItemProps) =>
    <FormNodeItem {...defaultProps} {...props} />;

export function FormNodeItem({
  type,
  data,
  icon = DEFAULT_ICON,
}: FormNodeItemProps) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        isConnectableStart={false}
      />
      <FormNodeTypeItem
        type={type}
        label={data.attributes?.label || ''}
        icon={icon}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectableEnd={false}
      />
    </>
  );
}
