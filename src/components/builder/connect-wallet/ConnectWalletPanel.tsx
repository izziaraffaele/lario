import { FormNodePanelProps } from '../types';

export function ConnectWalletPanel({ data }: FormNodePanelProps) {
  return <div>{data.attributes?.label}</div>;
}
