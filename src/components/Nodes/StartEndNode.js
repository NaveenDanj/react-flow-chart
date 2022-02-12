import React from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector  } from 'react-redux';


function StartEndNode(props) {

    const Nodes = useSelector((state) => state.Nodes.nodes);

    const handleChangeStartEnd = (val) => {

        for(let i = 0; i < Nodes.length; i++){

            if(Nodes[i].id == props.id){
                Nodes[i].nodeData.setCodeBlock(val);
            }

        }

    }
    

    return (
        <div>
            <label>Start/End</label>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Start/End</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Start/End"
                            size="small"
                            onChange={(e) => handleChangeStartEnd(e.target.value)}

                        >
                            <MenuItem value={'start'}>Start</MenuItem>
                            <MenuItem value={'end'}>End</MenuItem>
                        </Select>

                    </FormControl>


                </Grid>

            </Grid>
        </div>
    )
}

export default StartEndNode