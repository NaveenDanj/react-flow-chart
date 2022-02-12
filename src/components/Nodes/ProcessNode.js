import React , {useState} from 'react'

import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';

import { useSelector} from 'react-redux';


function ProcessNode(props) {

    const [varName , setVarName] = useState('');
    const [operator , setOperator] = useState('');
    const [varValue , setVarValue] = useState('');
    
    const Vars = Object.values(useSelector((state) => state.Vars.vars));
    const Nodes = useSelector((state) => state.Nodes.nodes);

    const handleSet = () => {

        for(let i = 0; i < Nodes.length; i++){

            if(Nodes[i].id === props.id){
                Nodes[i].nodeData.codeBlock = `${varName} ${operator} ${varValue}`;
                break;
            }

        }

        console.log('Node list : ' , Nodes);

    }


  
    return (
        <div>
            <label>Process</label>

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
                            onChange={(e) => setVarName(e.target.value) }
                        >   
                            {Vars.map((item) =>  <MenuItem key={item.key} value={item.name}>{item.name}</MenuItem>)}
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
                                size="small"
                                onChange={(e) => setOperator(e.target.value) }
                            >   
                                <MenuItem value={'='}>=</MenuItem>
                                <MenuItem value={'-'}>-</MenuItem>
                                <MenuItem value={'/'}>/</MenuItem>
                                <MenuItem value={'*'}>*</MenuItem>
                                <MenuItem value={'+='}>+=</MenuItem>
                                <MenuItem value={'-='}>-=</MenuItem>
                                <MenuItem value={'/='}>/=</MenuItem>
                                <MenuItem value={'*='}>*=</MenuItem>
                                <MenuItem value={'%'}>%</MenuItem>
                                <MenuItem value={'+'}>+</MenuItem>
                                <MenuItem value={'-'}>-</MenuItem>
                                <MenuItem value={'/'}>/</MenuItem>
                                <MenuItem value={'*'}>*</MenuItem>
                            </Select>

                    </FormControl>


                </Grid>

                <Grid item xs={4}>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setVarValue(e.target.value)} id="outlined-basic" label="Value" variant="outlined" size="small" />
                    </FormControl>
                </Grid>

            </Grid>
        </div>
    )
}

export default ProcessNode