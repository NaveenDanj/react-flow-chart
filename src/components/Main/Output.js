import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {resetOutput} from '../../Store/OutputSlice'

import { useSelector , useDispatch} from 'react-redux';




function Output() {

  const OutputList = useSelector((state) => state.Output.output);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('output list is : ' , OutputList);
  } ,[OutputList]);

  const handleClearOutput = () => {
    dispatch(resetOutput());
  }


  return (
    <div style={{  height : '20vh' , backgroundColor : 'white' ,  marginTop : 10}}>

      <label>Outputs:</label> <Button onClick={handleClearOutput}>Clear</Button><br/>

      <Box style={{  height : '20vh' }} sx={{ p: 2, border: '1px dashed grey' }}>


        <List 
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
          }} 
        
          style={{  height : '100%'}} 
          dense
        
        >

          {OutputList.map( (item) => (
            <ListItem>
              <ListItemText
                key={item.key}
                primary={item.output}
              />
            </ListItem>
          ))}
          
        </List>


      </Box>
    </div>
  )
}

export default Output