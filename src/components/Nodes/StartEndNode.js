import React from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function StartEndNode() {
  return (
    <div>
        <label>Start/End</label>
        <Grid container spacing={2}>

            <Grid item xs={12}>
                
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Start/End"
                        value={10}
                        size="small"

                    >
                        <MenuItem value={10}>Start</MenuItem>
                        <MenuItem value={20}>End</MenuItem>
                    </Select>

                </FormControl>


            </Grid>

        </Grid>
    </div>
  )
}

export default StartEndNode