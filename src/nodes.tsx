

const Node = ({size,position}:{size:number,position:number}) => {
  return (
    <mesh position={[1,position,1]}>
        <sphereGeometry args={[size,100]}/>
        <meshBasicMaterial color={'orange'}/>
    </mesh>
  )
}

export default Node
