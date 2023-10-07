import keyBy from 'lodash/keyBy';
import isEmpty from 'lodash/isEmpty';
import {
  FormNode,
  FormBuilderState,
  FormEdge,
  FormBuilderBlock,
} from './types';

type AdjacencyList = { [key: string]: string[] };

const getAdjacencyList = (edges: FormEdge[]) => {
  // Use the edges to create an adjacency list.
  return edges.reduce((carry, edge) => {
    if (!carry[edge.source]) {
      carry[edge.source] = [];
    }

    carry[edge.source].push(edge.target);
    return carry;
  }, {} as AdjacencyList);
};

const isStartNode = (node: FormNode) => node.type === 'start';

export function getFormBlocks(state: FormBuilderState): FormNode['data'][] {
  const blocksLookup = keyBy(state.nodes, 'id');
  const adjacencyList = getAdjacencyList(state.edges);
  const startNode = state.nodes.find(isStartNode);
  if (!startNode) {
    throw new Error('No starting node found!');
  }

  // 3. Recursively build the final list.
  const buildList = (id: string): FormBuilderBlock[] => {
    const children = adjacencyList[id];
    const result: FormBuilderBlock[] = [];

    if (!isEmpty(blocksLookup[id].data)) {
      result.push(blocksLookup[id].data);
    }

    if (children) {
      children.forEach((childId) => {
        result.push(...buildList(childId));
      });
    }

    return result;
  };

  const blocks = buildList(startNode.id).filter(
    (n) => n.name !== 'start' && n.name !== 'end'
  );
  return blocks;
}
