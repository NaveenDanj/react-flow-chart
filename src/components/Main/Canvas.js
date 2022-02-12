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
    console.log(params);
    dispatch( setNodes( addEdge(params, Nodes) ) );
    console.log(Nodes);

    for(let i = 0; i < Nodes.length; i++){

      if(Nodes[i].id === params.source){
        Nodes[i].nodeData.setNextNode(null);

        for(let j = 0; j < Nodes.length; j++){
          if(Nodes[j].id === params.target){
            Nodes[i].nodeData.setNextNode(Nodes[j].nodeData);
            break; 
          }
        }

      }

    }

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