import { FormNodePanelProps } from '../types';

export function ShortTextPanel({ data }: FormNodePanelProps) {
  return <div>{data.attributes?.label}</div>;
}
