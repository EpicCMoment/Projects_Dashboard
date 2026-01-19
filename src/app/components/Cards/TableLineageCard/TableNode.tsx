import { Handle, Position, type NodeProps } from "@xyflow/react";

export function TableNode(props: NodeProps) {
  const inputHandleCount = props.data.inputCount as number;
  const outputHandleCount = props.data.outputCount as number;

  const inputHandles = [];
  const outputHandles = [];

  for (let i = 0; i < inputHandleCount; i++) {
    inputHandles.push(
      <Handle type="target" position={Position.Left} id={`${i}`} key={i} />,
    );
  }

  for (let i = 0; i < outputHandleCount; i++) {
    outputHandles.push(
      <Handle type="source" position={Position.Right} id={`${i}`} key={i} />,
    );
  }

  return (
    <div className="bg-accent text-center p-2 border rounded text-sm">
      {props.data.label as string}
      {inputHandles}
      {outputHandles}
    </div>
  );
}
