import React, { useState, useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [];
const initialEdges = [];

const FlowBuilder = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [nodeId, setNodeId] = useState(1);

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const handleInputChange = (id, event) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label: event.target.value } } : node
      )
    );
  };

  const addQuestionNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: `node-${nodeId}`,
        data: { label: <input type="text" onChange={(e) => handleInputChange(`node-${nodeId}`, e)} placeholder={`Question ${nodeId}`} /> },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        type: "default",
      },
    ]);
    setNodeId(nodeId + 1);
  };

  const addInputNode = () => {
    setNodes((nds) => [
      ...nds,
      {
        id: `node-${nodeId}`,
        data: { label: <input type="text" onChange={(e) => handleInputChange(`node-${nodeId}`, e)} placeholder={`Answer ${nodeId}`} /> },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        type: "default",
      },
    ]);
    setNodeId(nodeId + 1);
  };

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={addQuestionNode}>Add Question Node</button>
        <button onClick={addInputNode}>Add Answer Node</button>
      </div>
      <div className="react-flow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
};

export default FlowBuilder;
