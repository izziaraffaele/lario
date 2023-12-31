import { create } from 'zustand';
import {
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
  NodeChange,
  Node,
} from 'reactflow';

import {
  FormNode,
  FormBuilderStore,
  FormBuilderState,
  FormBuilderBlock,
} from '../types';
import { DEFAULT_STATE, DEFAULT_POSITION } from '../constants';
import { fromBlock, getDefaultLayout } from '../node';
import { getDefaultEdges } from '../edge';

const isSelectChange = (change: NodeChange) =>
  change.type === 'select' && change.selected === true;

const deselectAll = (nodes: Node[]) =>
  nodes.map((n) => ({ ...n, selected: false }));

export const createStore = (initialState: FormBuilderState = DEFAULT_STATE) => {
  const nodes = [
    {
      id: 'start',
      position: { x: 0, y: 0 },
      type: 'start',
      data: {} as FormBuilderBlock,
      selectable: false,
      draggable: false,
    },
    ...initialState.nodes,
    {
      id: 'end',
      position: { x: 0, y: 0 },
      type: 'end',
      data: {} as FormBuilderBlock,
      selectable: false,
    },
  ];

  return create<FormBuilderStore>((set, get) => ({
    nodes: getDefaultLayout(nodes),
    edges: initialState.edges,
    onNodesChange: (changes) => {
      let nodes = get().nodes;

      if (changes.some(isSelectChange)) {
        nodes = deselectAll(nodes);
      }

      set({
        nodes: applyNodeChanges(changes, get().nodes) as FormNode[],
      });
    },
    onEdgesChange: (changes) => {
      set({
        edges: applyEdgeChanges(changes, get().edges),
      });
    },
    onConnect: (connection) => {
      set({
        edges: addEdge(connection, get().edges),
      });
    },
    reset: (state) => {
      const nodes = [
        {
          id: 'start',
          position: { x: 0, y: 0 },
          type: 'start',
          data: {} as FormBuilderBlock,
          selectable: false,
          draggable: false,
        },
        ...state.nodes,
        {
          id: 'end',
          position: { x: 0, y: 0 },
          type: 'end',
          data: {} as FormBuilderBlock,
          selectable: false,
        },
      ];

      set({
        nodes: getDefaultLayout(nodes),
        edges: getDefaultEdges(nodes),
      });
    },
    addNode: (node) => {
      set({
        nodes: [...get().nodes, node],
      });
    },
    addBlock: (data, position = DEFAULT_POSITION) => {
      const newNode = fromBlock(data);
      newNode.position = position;

      set({
        nodes: [...get().nodes, newNode],
      });
    },
    fromBlocks: (blocks) => {
      const nodes = blocks.map(fromBlock);
      set({
        nodes: getDefaultLayout(nodes),
        edges: getDefaultEdges(nodes),
      });
    },
    updateNode: (id, attributes) => {
      const nodes = [...get().nodes];
      const nodeIndex = nodes.findIndex((n) => n.id === id);
      nodes[nodeIndex].data.attributes = attributes;
      set({ nodes });
    },
  }));
};
