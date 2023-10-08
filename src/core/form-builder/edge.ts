import { FormEdge, FormNode } from './types';

type Connection = {
  source: string;
  sourceHandle?: string;
  target: string;
  targetHandle?: string;
};

export const getEdgeId = ({
  source,
  sourceHandle,
  target,
  targetHandle,
}: Connection) =>
  `form_builder-${source}${sourceHandle || ''}-${target}${targetHandle || ''}`;

export const getDefaultEdges = (nodes: FormNode[]) => {
  const edges: FormEdge[] = [];

  nodes.reduce((prev, current) => {
    if (prev) {
      const connection = {
        source: prev.id,
        target: current.id,
      };

      if (connection.source !== 'start' || connection.target !== 'end') {
        const edgeId = getEdgeId(connection);
        edges.push({ ...connection, id: edgeId });
      }
    }

    return current;
  }, null as FormNode | null);

  return edges;
};

export const getTreeEdges = (nodes: FormNode[]) => {
  const edges: FormEdge[] = [];

  for (let i = 0; i < nodes.length; i++) {
    const item = nodes[i];

    // Determine the sourceId for the edge
    let sourceId = item.parentNode;
    if (!sourceId && i > 0) {
      // If no parentId, and it's not the first item, use the previous node as the source
      sourceId = nodes[i - 1].id;
    }

    // If we have a valid sourceId, add to edges
    if (sourceId) {
      const connection = { source: sourceId, target: item.id };
      edges.push({
        ...connection,
        id: getEdgeId(connection),
      });
    }
  }

  return edges;
};
