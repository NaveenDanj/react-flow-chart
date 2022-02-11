import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MemoryIcon from '@mui/icons-material/Memory';


//adding process node
const handleAddProcessNode = () => {
    console.log('add process node');
}




function SideBarNodeList() {
  return (
    <List>
        <ListItem onClick={() => handleAddProcessNode()} button key={"Process"}>
            <ListItemIcon>
                <MemoryIcon />
            </ListItemIcon>
            <ListItemText primary={'Process'} />
        </ListItem>
    </List>
  )
}

export default SideBarNodeList