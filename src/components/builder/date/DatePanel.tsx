import { FormNodePanelProps } from '../types';

export function DatePanel({ data }: FormNodePanelProps) {
  return <div>{data.attributes?.label}</div>;
}
