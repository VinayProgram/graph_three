

const Node = ({size,position,color,value}:{size:number,position:[number,number,number],color:string,value:string}) => {
  return (
    <mesh position={position} onClick={()=>alert('clicked on ' + value)}>
        <sphereGeometry args={[size,100]}/>
        <meshBasicMaterial color={color}/>
    </mesh>
  )
}

export default Node
