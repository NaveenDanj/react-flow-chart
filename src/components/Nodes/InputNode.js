import React from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


function InputNode() {
  return (
    <div>
        <label>Input</label>
        <Grid container spacing={2}>

            <Grid item xs={12}>
                
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <TextField id="outlined-basic" label="Display Text" variant="outlined" size="small" />
                </FormControl>


            </Grid>

        </Grid>
    </div>
  )
}

export default InputNode