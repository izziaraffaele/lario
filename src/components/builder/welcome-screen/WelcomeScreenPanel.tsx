import { FormNodePanelProps } from '../types';

export function WelcomeScreenPanel({ data }: FormNodePanelProps) {
  return <div>{data.attributes?.label}</div>;
}
