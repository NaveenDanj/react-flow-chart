import React, { useEffect, useState } from 'react'
import ReactFlow , {Background , Controls} from 'react-flow-renderer';
import { useSelector } from 'react-redux';



let elements = [
    // {
    //   id: '1',
    //   type: 'input', // input node
    //   data: { label: 'Input Node' },
    //   position: { x: 250, y: 25 },
    // },
    // // default node
    // {
    //   id: '2',
    //   // you can also pass a React component as a label
    //   data: { label: <div>Default Node</div> },
    //   position: { x: 100, y: 125 },
    // },
    // {
    //   id: '3',
    //   type: 'output', // output node
    //   data: { label: 'Output Node' },
    //   position: { x: 250, y: 250 },
    // },

    // {
    //   id: '4',
    //   type: 'output', // output node
    //   data: { label: 'Output Node' },
    //   position: { x: 250, y: 250 },
    // },
    // animated edge
    // { id: 'e1-2', source: '1', target: '2', animated: true },
    // { id: 'e2-3', source: '2', target: '3' },
    {
      id: '1',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '2',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    },
    {
      id: '3',
      // you can also pass a React component as a label
      data: { label: <div>Default Node</div> },
      position: { x: 100, y: 125 },
    }
];


function Canvas() {

  const Nodes = useSelector((state) => state.Nodes.nodes);

  return (
    <div style={{ height: '60vh' , backgroundColor : 'white' , borderWidth : 1 , borderColor : 'gray' }}>
        <h1>Node length is : {Nodes.length}</h1>
        <ReactFlow elements={Nodes} >
          <Background color='#888' gap={16} />
          <Controls />
        </ReactFlow>
    </div>
  )
}

export default Canvas