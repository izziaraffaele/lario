'use client';
import { useCallback, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  NodeMouseHandler,
  NodeTypes,
  useReactFlow,
} from 'reactflow';
import { StartNode, EndNode, builderTypes } from '@/components/builder';
import { useFormBuilderStore } from '@/hooks/useFormBuiler';
import { fromBuilderTypes, getByBuilderType } from '@/utils/nodeTypes';

const nodeTypes: NodeTypes = {
  start: StartNode,
  end: EndNode,
  ...fromBuilderTypes(builderTypes),
};

let nodeId = 0;
const getNodeId = () => `node-${nodeId++}`;

export default function BuilderPage() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    useFormBuilderStore();

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const reactFlowInstance = useReactFlow();

  const onDragOver = useCallback<React.DragEventHandler>((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback<React.DragEventHandler>(
    (event) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper.current?.getBoundingClientRect() || {
          left: 0,
          top: 0,
        };

      const type = event.dataTransfer.getData('application/reactflow');
      const nodeType = getByBuilderType(builderTypes, type);

      // check if the dropped element is valid
      if (!nodeType) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const node = nodeType.create(getNodeId(), {}, position);

      addNode(node);
    },
    [reactFlowInstance, addNode]
  );

  const onNodeClick = useCallback<NodeMouseHandler>(
    (e, node) => {
      reactFlowInstance?.setCenter(node.position.x + 80, node.position.y, {
        zoom: reactFlowInstance.getZoom(),
      });
    },
    [reactFlowInstance]
  );

  return (
    <div style={{ width: '100%', height: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onNodeClick={onNodeClick}
      >
        <Background />
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
}
