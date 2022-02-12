import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';



function PlayScript() {

    const runNodeScript = (Node) => {

    }

    const handleRunScript = () => {
        
        

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