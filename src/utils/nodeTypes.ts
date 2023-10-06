import { BuilderType } from '@/components/builder';
import { NodeTypes } from 'reactflow';

export function fromBuilderTypes(builderTypes: BuilderType[]) {
  return builderTypes.reduce((carry, item) => {
    carry[item.nodeType.key] = item.components.node;
    return carry;
  }, {} as NodeTypes);
}

export function getByBuilderType(builderTypes: BuilderType[], lookup: string) {
  return builderTypes.find((item) => item.nodeType.key === lookup)?.nodeType;
}
