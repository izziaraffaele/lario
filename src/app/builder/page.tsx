'use client';
import { useCallback, useRef } from 'react';
import ReactFlow, {
  Background,
  Controls,
  NodeMouseHandler,
  NodeTypes,
  useReactFlow,
} from 'reactflow';
import { StartNode, EndNode } from '@/components/builder';
import { useFormBuilderStore } from '@/hooks/useFormBuiler';
import { nodeTypes as builderTypes } from '@/utils/nodeTypes';
import { FormNodeItem } from '@/components/builder/FormNodeItem';
import { useSearchParams } from 'next/navigation';

const nodeTypes: NodeTypes = {
  start: StartNode,
  end: EndNode,
  ...builderTypes.reduce((carry, nodeType) => {
    carry[nodeType.key] = FormNodeItem;
    return carry;
  }, {} as NodeTypes),
};

let nodeId = 0;
const getNodeId = () => `node-${nodeId++}`;

function BuildTab() {
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
      const nodeType = builderTypes.find((n) => n.key === type);

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

function PreviewTab() {
  return null;
}

export default function BuilderPate() {
  const searchParams = useSearchParams();
  return searchParams.get('tab') === 'preview' ? <PreviewTab /> : <BuildTab />;
}
