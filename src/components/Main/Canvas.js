import React from 'react'
import ReactFlow , {Background , Controls , addEdge} from 'react-flow-renderer';
import { useSelector , useDispatch } from 'react-redux';
import { setNodes } from '../../Store/NodeSlice'

import IfNode from '../Nodes/IfNode';

const nodeTypes = {
  ifNode: IfNode,
};




function Canvas() {

  const Nodes = useSelector((state) => state.Nodes.nodes);
  const dispatch = useDispatch();

  const onEdgeUpdate = (edge) => {
    console.log(edge);
  }

  const onConnect = (params) => {
    console.log(params);

    let customParams = {
      ...params,
    }

    dispatch( setNodes( addEdge(customParams, Nodes) ) );
    console.log(Nodes);

    for(let i = 0; i < Nodes.length; i++){

      if(Nodes[i].id === customParams.source){
        Nodes[i].nodeData.setNextNode(null);

        if(Nodes[i].nodeData.type === 'ifNode'){

          console.log('if node')
          
          if(customParams.sourceHandle === 'truePath'){
            
            console.log('true path added')
            
            customParams = {
              ...customParams,
              label : 'True',
              animated: true,
            }

            console.log('custom params are ' , customParams);

          }else{
            customParams = {
              ...customParams,
              label : 'False',
              animated: true,
            }
          }

        }

        for(let j = 0; j < Nodes.length; j++){
          if(Nodes[j].id === customParams.target){
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
          nodeTypes={nodeTypes}
        >
          <Background color='#888' gap={16} />
          <Controls />
        </ReactFlow>
    </div>
  )
}

export default Canvas