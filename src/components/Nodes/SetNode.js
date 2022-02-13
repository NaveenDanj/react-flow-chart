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

import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';


import {setVar , deleteVar} from '../../Store/ScriptVarObjectSlice'


import { useSelector , useDispatch  } from 'react-redux';



function SetNode() {

    const dispatch = useDispatch();
    const Vars = useSelector((state) => state.Vars.vars);

    const [varName , setVarName] = useState(null);
    const [varValue , setVarValue] = useState(null);
    const [dataType , setDataType] = useState('string');

    const handleAddVar = () => {

        let convertedVarValue = null;

        if(dataType === 'string'){
            convertedVarValue = varValue;
        }else if(dataType === 'number'){
            convertedVarValue = +varValue;
        }else if(dataType === 'boolean'){
            convertedVarValue = varValue === 'true';
        }

        let dataObject = {
            key : Date.now(),
            name : varName ,
            value : convertedVarValue,
            dataType : dataType
        }

        dispatch(setVar(dataObject));

        console.log(dataObject);
    }

    const handleDelete = (item) => {
        dispatch( deleteVar(item) )
    }


    return (
        <div >
            <label>Setter</label>
            <Grid container spacing={0}>

                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setVarName(e.target.value)} id="outlined-basic" label="Var Name" variant="outlined" size="small" />
                    </FormControl>
                </Grid>

                <Grid item xs={4}>

                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Var Name"
                            size="small"
                            onChange={(e) => setDataType(e.target.value)}
                        >
                            <MenuItem value={'string'}>String</MenuItem>
                            <MenuItem value={'number'}>Number</MenuItem>
                            <MenuItem value={'boolean'}>Boolean</MenuItem>

                        </Select>
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