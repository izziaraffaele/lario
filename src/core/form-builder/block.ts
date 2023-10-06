import { FormBuilderBlock } from './types';

export function makeBlock<T extends string>(
  name: T,
  id: string,
  attributes?: FormBuilderBlock['attributes']
): FormBuilderBlock {
  return { id, name, attributes };
}

export function makeTypedBlock<T extends string>(
  name: T,
  defaultAttributes?: FormBuilderBlock['attributes']
) {
  return (id: string, attributes?: Partial<FormBuilderBlock['attributes']>) =>
    makeBlock(name, id, { ...defaultAttributes, ...attributes });
}
