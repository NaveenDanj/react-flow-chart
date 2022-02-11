import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

function OutputNode() {
  return (
    <div>
        <label>Output</label>
        <Grid style={{ backgroundColor : 'white' }} container spacing={0}>

            <Grid  item xs={4}>
                <FormControl style={{ width : '100%' }} sx={{ m: 1, minWidth: 80 }}>
                    <TextField id="outlined-basic" label="Display Text" variant="outlined" size="small" />
                </FormControl>
            </Grid>


            <Grid item xs={8}>
                
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Var Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Var Name"
                        value={10}
                        size="small"

                    >
                        <MenuItem value={10}>X</MenuItem>
                        <MenuItem value={20}>Y</MenuItem>
                        <MenuItem value={30}>i</MenuItem>
                    </Select>
                </FormControl>


            </Grid>

        </Grid>
    </div>
  )
}

export default OutputNode