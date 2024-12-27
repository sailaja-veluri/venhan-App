import React from 'react';
import ReactFlow, { Background, Controls, addEdge, ReactFlowProvider } from 'react-flow-renderer';
import { useDiagramContext } from '../context/DiagramContext';

const FlowDiagram = () => {
  const { nodes, edges, setNodes, setEdges } = useDiagramContext();

  const handleNodesChange = (changes) =>
    setNodes((nds) =>
      nds.map((node) => {
        const updatedNode = changes.find((change) => change.id === node.id);
        return updatedNode ? { ...node, ...updatedNode } : node;
      })
    );

  const handleEdgesChange = (changes) =>
    setEdges((eds) => eds.map((edge) => ({ ...edge, ...changes })));

  const handleConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={handleConnect}
        fitView
        nodesDraggable={true}
        draggable={true}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default FlowDiagram;
