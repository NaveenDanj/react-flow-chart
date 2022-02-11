import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MemoryIcon from '@mui/icons-material/Memory';

import { useSelector , useDispatch  } from 'react-redux';
import {resetNodes , setNodes } from '../../Store/NodeSlice'

import ProcessNode from '../Nodes/ProcessNode';
import StartEndNode from '../Nodes/StartEndNode';
import InputNode from '../Nodes/InputNode';
import OutputNode from '../Nodes/OutputNode';


//adding process node




function SideBarNodeList() {

    const Nodes = useSelector((state) => state.Nodes.nodes);
    const dispatch = useDispatch();

    const handleAddProcessNode = () => {

        let lastNodes =[...Nodes];

        let newNode = {
            id :  Nodes.length + 1 + '',
            data: { label: (
                <ProcessNode />
            ) },
            position: { x: 250, y: 25 },
            style: { border: '1px solid #777', width : 'auto'   },
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
            data: { label: (
                <InputNode />
            ) },
            position: { x: 250, y: 25 },
            isHidden : false,
            style: { border: '1px solid #777', width : 'auto'   },

        }

        lastNodes.push(newNode);
        dispatch(resetNodes())
        dispatch( setNodes(lastNodes) );

    }

    const handleAddStartEndNode = () => {
            
        let lastNodes =[...Nodes];

        let newNode = {
            id :  Nodes.length + 1 + '',
            data: { label: (
                <StartEndNode />
            ) },
            position: { x: 250, y: 25 },
            isHidden : false,
            style: { border: '1px solid #777', width : 'auto'   },

        }

        lastNodes.push(newNode);
        dispatch(resetNodes())
        dispatch( setNodes(lastNodes) );
    
    }

    const handelAddOutputNode = () => {
        let lastNodes =[...Nodes];

        let newNode = {
            id :  Nodes.length + 1 + '',
            data: { label: (
                <OutputNode />
            ) },
            position: { x: 250, y: 25 },
            isHidden : false,
            style: { border: '1px solid #777', width : 'auto'   },

        }

        lastNodes.push(newNode);
        dispatch(resetNodes())
        dispatch( setNodes(lastNodes) );
    }


    return (
        <List>

            <ListItem onClick={() => handleAddStartEndNode()} button key={"Start/End"}>
                <ListItemIcon>
                    <MemoryIcon />
                </ListItemIcon>
                <ListItemText primary={'Start/End'} />
            </ListItem>

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

            <ListItem onClick={() => handelAddOutputNode()} button key={"Output"}>
                <ListItemIcon>
                    <MemoryIcon />
                </ListItemIcon>
                <ListItemText primary={'Output'} />
            </ListItem>


        </List>
    )
}

export default SideBarNodeList