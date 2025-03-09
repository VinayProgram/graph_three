import React from 'react'
import b from '../basic-graph.json'
const SidePanel = () => {
    console.log(b)
  return (
    <div style={{minWidth:'10rem'}}>
      <textarea value={JSON.stringify(b)}/>
    </div>
  )
}

export default SidePanel
