import React , {useState} from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';

import {setVar , deleteVar} from '../../Store/ScriptVarObjectSlice'


import { useSelector , useDispatch  } from 'react-redux';



function SetNode() {

    const dispatch = useDispatch();
    const Vars = useSelector((state) => state.Vars.vars);

    const [varName , setVarName] = useState(null);
    const [varValue , setVarValue] = useState(null);


    const handleAddVar = () => {
        console.log('the values are : ' , varName , varValue);
        dispatch(setVar({
            key : Date.now(),
            name : varName ,
            value : varValue
        }));

        console.log(Vars);
    }

    const handleDelete = (item) => {
        dispatch( deleteVar(item) )
    }


    return (
        <div >
            <label>Setter</label>
            <Grid container spacing={0}>

                <Grid item xs={8}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setVarName(e.target.value)} id="outlined-basic" label="Var Name" variant="outlined" size="small" />
                    </FormControl>
                </Grid>

                <Grid item xs={2}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setVarValue(e.target.value)} id="outlined-basic" label="Value" variant="outlined" size="small" />
                    </FormControl>
                </Grid>

                <Grid style={{ marginTop : 12 }} item xs={2}>

                    <IconButton onClick={() => handleAddVar()} aria-label="delete" size="small">
                        <AddIcon fontSize="inherit" />
                    </IconButton>

                </Grid>

            </Grid>


            <Grid container spacing={2}>

                <Grid item xs={12}>

                    <center>

                        <List sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
                            { Object.values(Vars).map((item) => (
                                <ListItem
                                    key={item.key}
                                    disableGutters
                                    secondaryAction={
                                        <IconButton onClick={ () => handleDelete(item) }>
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText primary={`${item.name} = ${item.value}`} />
                                </ListItem>
                            ))}
                        </List>

                    </center>

                </Grid>


            </Grid>


        </div>
    )
}

export default SetNode