import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';


import { useSelector} from 'react-redux';


function InputNode(props) {

    const Vars = Object.values(useSelector((state) => state.Vars.vars));
    const Nodes = useSelector((state) => state.Nodes.nodes);

    const [displayText , setDisplayText] = React.useState('');
    const [varName , setVarName] = React.useState('');

    const handleSet = () => {
            
        console.log('handle set : ' , displayText , varName);

        for(let i = 0; i < Nodes.length; i++){

            if(Nodes[i].id === props.id){
                Nodes[i].nodeData.setCodeBlock(`input-'${varName}'-${displayText}`);
                console.log('node is : ' , Nodes[i]);
                break;
            }

        }
    
    }

    return (
        <div>
            <label>Input</label>
            <IconButton onClick={() => handleSet()} size="small">
                <DoneIcon size="small" />
            </IconButton>
            <Grid container spacing={2}>

                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-label">Var Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Var Name"
                            size="small"
                            onChange={(e) => setVarName(e.target.value)}
                        >
                            {Vars.map((item) => <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={8}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setDisplayText(e.target.value)} id="outlined-basic" label="Display Text" variant="outlined" size="small" />
                    </FormControl>
                </Grid>

            </Grid>
        </div>
    )
}

export default InputNode