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
