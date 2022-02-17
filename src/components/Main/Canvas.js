import React from 'react'
import ReactFlow , {Background , Controls , addEdge} from 'react-flow-renderer';
import { useSelector , useDispatch } from 'react-redux';
import { setNodes } from '../../Store/NodeSlice'

import IfNode from '../Nodes/IfNode';

const nodeTypes = {
  ifNode: IfNode,
};

const getNodeFromId = (id , Nodes) => {

  for(let i = 0; i < Nodes.length; i++){
    if(Nodes[i].id === id){
      return Nodes[i];
    }
  }


}


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

    for(let i = 0; i < Nodes.length; i++){

      if(Nodes[i].id === customParams.source){
        Nodes[i].nodeData.setNextNode(null);

        if(Nodes[i].type === 'ifNode'){

          console.log('if node')
          
          if(customParams.sourceHandle === 'truePath'){
                        
            customParams = {
              ...customParams,
              label : 'True',
              animated: true,
            }

            Nodes[i].nodeData.additionalData.trueNode = getNodeFromId(customParams.target , Nodes);

          }else{
            customParams = {
              ...customParams,
              label : 'False',
              animated: true,
            }

            Nodes[i].nodeData.additionalData.falseNode = getNodeFromId(customParams.target , Nodes);

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

    dispatch( setNodes( addEdge(customParams, Nodes) ) );
    console.log(Nodes);

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