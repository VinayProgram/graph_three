import { Canvas } from "@react-three/fiber"
import Node from "./nodes"
import { Line, OrbitControls } from "@react-three/drei"
import b from '../basic-graph.json'
const Panel = () => {
  return (
    <Canvas>
        {
            Object.keys(b).map((x,index)=>{
                return (
                    <>
                          <Node size={0.5} position={index*2}/>
                          <Line points={[[1,index-1*2,1],[1,index*2,1]]} lineWidth={4} color={'black'}/>
                    </>
                )
            })
        }
      <OrbitControls/>
    </Canvas>
  )
}

export default Panel
