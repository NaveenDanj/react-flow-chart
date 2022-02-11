import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MemoryIcon from '@mui/icons-material/Memory';

import { useSelector , useDispatch  } from 'react-redux';
import { addNode , resetNodes , setNodes } from '../../Store/NodeSlice'




//adding process node




function SideBarNodeList() {

    const Nodes = useSelector((state) => state.Nodes.nodes);
    const dispatch = useDispatch();

    const handleAddProcessNode = () => {

        let lastNodes =[...Nodes];

        let newNode = {
            id :  Nodes.length + 1 + '',
            data: { label: 'Process Node' },
            position: { x: 250, y: 25 },
            isHidden : false
        }

        lastNodes.push(newNode);
        dispatch(resetNodes())
        dispatch( setNodes(lastNodes) );
    }

    const handleAddInputNode = () => {

        let lastNodes =[...Nodes];

        let newNode = {
            id :  Nodes.length + 1 + '',
            data: { label: 'Input Node' },
            position: { x: 250, y: 25 },
            isHidden : false
        }

        lastNodes.push(newNode);
        dispatch(resetNodes())
        dispatch( setNodes(lastNodes) );

    }


    return (
        <List>

            <ListItem onClick={() => handleAddProcessNode()} button key={"Process"}>
                <ListItemIcon>
                    <MemoryIcon />
                </ListItemIcon>
                <ListItemText primary={'Process'} />
            </ListItem>

            <ListItem onClick={() => handleAddInputNode()} button key={"Input"}>
                <ListItemIcon>
                    <MemoryIcon />
                </ListItemIcon>
                <ListItemText primary={'Input'} />
            </ListItem>

        </List>
    )
}

export default SideBarNodeList