import type { TableLineageArray } from "@/app/backend/models/table_lineage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Node,
  Position,
  useUpdateNodeInternals,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useTheme } from "@/components/theme-provider";
import { TableNode } from "./TableNode";

interface TableLineageCardProps {
  lineages: TableLineageArray | null;
}

const nodeTypes = {
  tableNode: TableNode,
};

const nodePool: Node[] = [];
const edgePool: Edge[] = [];
const nodeRegister: string[] = [];

export function TableLineageCard({ lineages }: TableLineageCardProps) {
  const [nodes, setNodes] = useState(nodePool);
  const [edges, setEdges] = useState(edgePool);
  const { theme } = useTheme();
  const updateNodeInternals = useUpdateNodeInternals();

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const parentX = 0;
  const childX = 250;
  const deltaY = 70;
  let parentY = 0;
  let childY = 0;

  /** First add parent table nodes */
  lineages?.map((lineage) => {
    // child is not added to nodePool yet
    if (nodeRegister.indexOf(lineage.child_table) === -1) {
      nodeRegister.push(lineage.child_table);

      const newNode: Node = {
        id: lineage.child_table,
        position: { x: childX, y: childY },
        data: { label: lineage.child_table, inputCount: 2 },
        draggable: false,
        connectable: false,
        type: "tableNode",
        sourcePosition: Position.Left,
      };

      childY += deltaY;

      nodePool.push(newNode);
      setNodes(nodePool);
    }

    // parent is not added to nodePool yet
    if (nodeRegister.indexOf(lineage.parent_table) === -1) {
      nodeRegister.push(lineage.parent_table);

      const newNode: Node = {
        id: lineage.parent_table,
        position: { x: parentX, y: parentY },
        data: { label: lineage.parent_table, outputCount: 1 },
        draggable: false,
        connectable: false,
        type: "tableNode",
        targetPosition: Position.Right,
      };

      parentY += deltaY;

      nodePool.push(newNode);

      setNodes(nodePool);

      /** Add edges */
      const newEdge: Edge = {
        id: `${lineage.parent_table}-${lineage.child_table}`,
        type: "straight",
        source: lineage.parent_table,
        target: lineage.child_table,
        targetHandle: "0",
        markerEnd: {
          type: "arrowclosed",
          width: 20,
          height: 20,
          color: "#FF0072",
        },
        style: {
          strokeWidth: 2,
          stroke: "#FF0072",
        },
      };

      edgePool.push(newEdge);
      setEdges(edgePool);
      updateNodeInternals(lineage.parent_table);
    }
  });

  if (lineages === null) {
    return (
      <Card className="bg-primary-foreground border-0 rounded-lg h-full p-4">
        <CardHeader>
          <CardTitle className="text-2xl">Table Lineage</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
        <div className="flex justify-center mb-8 text-destructive text-xl">
          Lineage information not found!
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-primary-foreground border-0 rounded-lg h-full p-4 col-span-2 2xl:min-h-200 sm:min-h-100">
      <CardHeader>
        <CardTitle className="text-2xl">Table Lineage</CardTitle>
      </CardHeader>
      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
          colorMode={theme}
          fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
        />
      </div>
    </Card>
  );
}
