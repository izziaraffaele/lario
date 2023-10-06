import { FormNodePanelProps } from '../types';

export function Web3GatePanel({ data }: FormNodePanelProps) {
  return <div>{data.attributes?.label}</div>;
}
