import React from 'react'
import ReactFlow , {Background , Controls , addEdge} from 'react-flow-renderer';
import { useSelector , useDispatch } from 'react-redux';
import { setNodes } from '../../Store/NodeSlice'





function Canvas() {

  const Nodes = useSelector((state) => state.Nodes.nodes);
  const dispatch = useDispatch();

  const onEdgeUpdate = (edge) => {
    console.log(edge);
  }

  const onConnect = (params) => {
    console.log(Nodes);
    dispatch( setNodes( addEdge(params, Nodes) ) );
    console.log(Nodes);
  } 


  return (
    <div style={{ height: '65vh' , backgroundColor : 'white' , borderWidth : 1 , borderColor : 'red' , borderStyle : 'solid' }}>
        <ReactFlow 
          elements={Nodes}
          onEdgeUpdate={onEdgeUpdate}
          onConnect={onConnect}
        >
          <Background color='#888' gap={16} />
          <Controls />
        </ReactFlow>
    </div>
  )
}

export default Canvas