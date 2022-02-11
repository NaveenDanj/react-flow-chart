import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Output() {
  return (
    <div style={{ backgroundColor : 'white' ,  marginTop : 10}}>
      <Box style={{  height : '20vh' }} sx={{ p: 2, border: '1px dashed grey' }}>
        <label>Output</label>
      </Box>
    </div>
  )
}

export default Output