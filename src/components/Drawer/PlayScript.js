import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { useSelector , useDispatch} from 'react-redux';
import Runner from '../../Lib/Runner';
import {setVar , getVar , resetVars , deleteVar , updateVar} from '../../Store/ScriptVarObjectSlice'
import {addOutput} from '../../Store/OutputSlice'


function PlayScript() {

    const Vars = Object.values(useSelector((state) => state.Vars.vars));
    const Nodes = useSelector((state) => state.Nodes.nodes);
    const dispatch = useDispatch();

    const handleRunScript = () => {
        console.log('script ran!');
        let runner = new Runner(Nodes , Vars , dispatch , {setVar , getVar , resetVars , deleteVar , updateVar , addOutput});
        let initNode = null;

        for(let i = 0; i < Nodes.length; i++){
            if(Nodes[i].nodeData.type === 'StartEnd'){
                initNode = Nodes[i];
                break;
            }
        }

        console.log('init node is : ' , initNode);

        runner.run(initNode.nodeData);
    }

    return (

        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton onClick={() => handleRunScript()}>
                <PlayCircleOutlineIcon />
            </IconButton>
        </Box>

    )
}

export default PlayScript