import { FormBuilderBlock, FormNodeType } from './types';
import { makeTypedNode } from './node';

export function makeNodeType(
  key: string,
  icon: string,
  defaultData: Omit<FormBuilderBlock, 'id' | 'name'>
): FormNodeType {
  return {
    key,
    icon,
    label: defaultData.attributes?.label || '',
    description: defaultData.attributes?.description,
    create: makeTypedNode(key, defaultData),
  };
}
