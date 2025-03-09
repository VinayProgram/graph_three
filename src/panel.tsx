import { Canvas } from "@react-three/fiber";
import Node from "./nodes";
import { Line, OrbitControls } from "@react-three/drei";
import b from "../basic-graph.json";
import { Vector3 } from "three";

const Panel = () => {
  const graphData: GraphData = b;

  return (
    <Canvas>
      {Object.keys(graphData).map((key: string) => {
        const node = graphData[key];
        return (
          <Node
            value={key}
            key={key}
            size={0.5}
            position={[node.positionx, node.positiony, 1]}
            color={node.color}
          />
        );
      })}

      {/* Render edges based on parent-child relationships */}
      {Object.keys(graphData).flatMap((key: string) => {
        return graphData[key].children.map((childKey: string) => {
          const start = new Vector3(graphData[key].positionx, graphData[key].positiony, 1);
          const end = new Vector3(graphData[childKey].positionx, graphData[childKey].positiony, 1);

          return (
            <Line
              key={`${key}-${childKey}`}
              points={[start, end]}
              lineWidth={2}
              color="black"
            />
          );
        });
      })}

      <OrbitControls />
    </Canvas>
  );
};

export default Panel;



interface NodeData {
  parent: string[];
  children: string[];
  positionx: number;
  positiony: number;
  color: string;
}

interface GraphData {
  [key: string]: NodeData;
}