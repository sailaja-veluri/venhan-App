import React, { useState } from 'react';
import { useDiagramContext } from '../context/DiagramContext';

const Sidebar = () => {
  const {
    addNode,
    addEdge,
    handleDeleteNode,
    handleDeleteEdge,
    handleEditNode,
    handleEditEdge,
  } = useDiagramContext();

  const [nodeData, setNodeData] = useState({ id: '', label: '', x: 0, y: 0 });
  const [edgeData, setEdgeData] = useState({ source: '', target: '' });
  const [editNodeData, setEditNodeData] = useState({ id: '', label: '', x: '', y: '' });
  const [editEdgeData, setEditEdgeData] = useState({ id: '', source: '', target: '' });
  const [deleteNodeData, setDeleteNodeData] = useState({ id: ''});
  const [deleteEdgeData, setDeleteEdgeData] = useState({ id: ''});

  const handleAddNode = () => {
    if (!nodeData.id || !nodeData.label) return alert('Node ID and Label are required');
    addNode({
      id: nodeData.id,
      data: { label: nodeData.label },
      position: { x: parseFloat(nodeData.x), y: parseFloat(nodeData.y) },
    });
    setNodeData({ id: '', label: '', x: 0, y: 0 });
  };

  const handleAddEdge = () => {
    if (!edgeData.source || !edgeData.target) return alert('Source and Target are required');
    addEdge({
      id: `e${edgeData.source}-${edgeData.target}`,
      source: edgeData.source,
      target: edgeData.target,
    });
    setEdgeData({ source: '', target: '' });
  };

  const handleEditNodeClick = () => {
    if (!editNodeData.id) return alert('Node ID is required');
    handleEditNode(editNodeData);
    setEditNodeData({ id: '', label: '', x: '', y: '' });
  };

  const handleEditEdgeClick = () => {
    if (!editEdgeData.id) return alert('Edge ID is required');
    handleEditEdge(editEdgeData);
    setEditEdgeData({ id: '', source: '', target: '' });
  };

  const handleDeleteNodeClick = () => {
    if (!deleteNodeData.id) return alert('Node ID is required');
    handleDeleteNode(deleteNodeData.id);
    setDeleteNodeData({ id: ''});
  };

  const handleDeleteEdgeClick = () => {
    if (!deleteEdgeData.id) return alert('Edge ID is required');
    handleDeleteEdge(deleteEdgeData.id);
    setDeleteEdgeData({ id: ''});
  };

  return (
    <div className="sidebar">
      <h3>Add Node</h3>
      <input
        placeholder="Node ID"
        value={nodeData.id}
        onChange={(e) => setNodeData({ ...nodeData, id: e.target.value })}
      />
      <input
        placeholder="Label"
        value={nodeData.label}
        onChange={(e) => setNodeData({ ...nodeData, label: e.target.value })}
      />
      <input
        placeholder="X Position"
        type="number"
        value={nodeData.x}
        onChange={(e) => setNodeData({ ...nodeData, x: e.target.value })}
      />
      <input
        placeholder="Y Position"
        type="number"
        value={nodeData.y}
        onChange={(e) => setNodeData({ ...nodeData, y: e.target.value })}
      />
      <button onClick={handleAddNode}>Add Node</button>

      <h3>Add Edge</h3>
      <input
        placeholder="Source Node ID"
        value={edgeData.source}
        onChange={(e) => setEdgeData({ ...edgeData, source: e.target.value })}
      />
      <input
        placeholder="Target Node ID"
        value={edgeData.target}
        onChange={(e) => setEdgeData({ ...edgeData, target: e.target.value })}
      />
      <button onClick={handleAddEdge}>Add Edge</button>

      <h3>Edit Node</h3>
      <input
        placeholder="Node ID to Edit"
        value={editNodeData.id}
        onChange={(e) => setEditNodeData({ ...editNodeData, id: e.target.value })}
      />
      <input
        placeholder="New Label"
        value={editNodeData.label}
        onChange={(e) => setEditNodeData({ ...editNodeData, label: e.target.value })}
      />
      <input
        placeholder="New X Position"
        value={editNodeData.x}
        onChange={(e) => setEditNodeData({ ...editNodeData, x: e.target.value })}
      />
      <input
        placeholder="New Y Position"
        value={editNodeData.y}
        onChange={(e) => setEditNodeData({ ...editNodeData, y: e.target.value })}
      />
      <button onClick={handleEditNodeClick}>Edit Node</button>

      <h3>Edit Edge</h3>
      <input
        placeholder="Edge ID to Edit"
        value={editEdgeData.id}
        onChange={(e) => setEditEdgeData({ ...editEdgeData, id: e.target.value })}
      />
      <input
        placeholder="New Source Node"
        value={editEdgeData.source}
        onChange={(e) => setEditEdgeData({ ...editEdgeData, source: e.target.value })}
      />
      <input
        placeholder="New Target Node"
        value={editEdgeData.target}
        onChange={(e) => setEditEdgeData({ ...editEdgeData, target: e.target.value })}
      />
      <button onClick={handleEditEdgeClick}>Edit Edge</button>

      <h3>Delete Node</h3>
      <input
        placeholder="Node ID to Delete"
        onChange={(e) => setDeleteNodeData({ ...deleteNodeData, id: e.target.value })}
      />
      <button onClick={handleDeleteNodeClick}>Delete Node</button>

      <h3>Delete Edge</h3>
      <input
        placeholder="Edge ID to Delete"
        onChange={(e) => setDeleteEdgeData({ ...deleteEdgeData, id: e.target.value })}
      />
      <button onClick={handleDeleteEdgeClick}>Delete Edge</button>
    </div>
  );
};

export default Sidebar;
