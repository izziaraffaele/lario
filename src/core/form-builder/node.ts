import { FormNode, FormBuilderBlock } from './types';
import { Node } from 'reactflow';
import { DEFAULT_POSITION } from './constants';
import { makeTypedBlock } from './block';

export const getDefaultLayout = (nodes: Node[]) => {
  let prevNode: Node | null = null;

  return nodes.reduce((carry, item) => {
    const itemPosition = !prevNode
      ? DEFAULT_POSITION
      : { x: prevNode.position.x + 300, y: prevNode.position.y };

    prevNode = { ...item, position: itemPosition };
    carry.push(prevNode);

    return carry;
  }, [] as Node[]);
};

export const fromBlock = (data: FormBuilderBlock): FormNode => ({
  id: data.id,
  type: data.name,
  data,
  position: DEFAULT_POSITION,
});

export function makeNode<T extends string>(
  type: T,
  id: string,
  data: FormBuilderBlock,
  position: FormNode['position'] = DEFAULT_POSITION
): FormNode {
  return { id, type, data, position };
}

export function makeTypedNode<T extends string>(
  type: T,
  defaultData?: Omit<FormBuilderBlock, 'id' | 'name'>
) {
  const makeBlock = makeTypedBlock(type, defaultData?.attributes);
  return (
    id: string,
    data?: Partial<Omit<FormBuilderBlock, 'id' | 'name'>>,
    position?: FormNode['position']
  ) => makeNode(type, id, makeBlock(id, data?.attributes), position);
}
