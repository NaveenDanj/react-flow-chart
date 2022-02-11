import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

function SetNode() {
  return (
    <div >
        <label>Setter</label>
        <Grid container spacing={2}>

            <Grid item xs={10}>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <TextField id="outlined-basic" label="Display Text" variant="outlined" size="small" />
                </FormControl>
            </Grid>

            <Grid style={{ marginTop : 12 }} item xs={2}>

                <IconButton aria-label="delete" size="small">
                    <AddIcon fontSize="inherit" />
                </IconButton>

            </Grid>

        </Grid>


        <Grid container spacing={2}>

            <Grid item xs={12}>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {[1, 2, 3].map((value) => (
                        <ListItem
                            key={value}
                            disableGutters
                            secondaryAction={
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={`Line item ${value}`} />
                        </ListItem>
                    ))}
                </List>

            </Grid>


        </Grid>


    </div>
  )
}

export default SetNode