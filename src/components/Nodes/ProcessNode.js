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

            <Grid item xs={4}>
                
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-label">Operator</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Operator"
                            value={10}
                            size="small"

                        >
                            <MenuItem value={10}>+</MenuItem>
                            <MenuItem value={20}>-</MenuItem>
                            <MenuItem value={30}>/</MenuItem>
                            <MenuItem value={30}>*</MenuItem>
                            <MenuItem value={30}>+=</MenuItem>
                            <MenuItem value={30}>-=</MenuItem>
                            <MenuItem value={30}>/=</MenuItem>
                            <MenuItem value={30}>*=</MenuItem>
                            <MenuItem value={30}>%</MenuItem>

                        </Select>

                </FormControl>


            </Grid>

            <Grid item xs={4}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <TextField id="outlined-basic" label="Value" variant="outlined" size="small" />
                </FormControl>
            </Grid>


        </Grid>
    </div>
  )
}

export default ProcessNode