import { FormBlock } from '@quillforms/types';
import {
  Node,
  Edge,
  XYPosition,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
} from 'reactflow';

export type FormBuilderBlock = FormBlock;
export type FormNode = Node<FormBuilderBlock>;
export type FormEdge = Edge;

export type FormBuilderState = {
  nodes: FormNode[];
  edges: FormEdge[];
};

export type FormBuilderAction = {
  // reactflow actions
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  // custom actions
  addBlock(data: FormBuilderBlock, position?: XYPosition): void;
  addNode(node: FormNode): void;
  fromBlocks(blocks: FormBuilderBlock[]): void;
  reset: (s: FormBuilderState) => void;
  updateBlock: (id: string, attributes: FormBuilderBlock['attributes']) => void;
};

export type FormBuilderStore = FormBuilderState & FormBuilderAction;

export type FormNodeType<T extends FormBlock = FormBlock> = {
  key: string;
  label: string;
  description?: string;
  create: (
    id: string,
    data: Partial<T>,
    postion?: FormNode['position']
  ) => FormNode;
};
