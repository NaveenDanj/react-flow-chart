import React from 'react'

import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';



function ProcessNode() {
  return (
    <div>
        <label>Process</label>
        <Grid container spacing={2}>

            <Grid item xs={4}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        value={10}
                        size="small"

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                </FormControl>
                    
            </Grid>

            <Grid item xs={4}>
                
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            value={10}
                            size="small"

                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>

                </FormControl>


            </Grid>

            <Grid item xs={4}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                </FormControl>
            </Grid>


        </Grid>
    </div>
  )
}

export default ProcessNode