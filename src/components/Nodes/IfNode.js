import React from 'react'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Handle } from 'react-flow-renderer';

import { useSelector} from 'react-redux';


function IfNode(props) {

    const Nodes = useSelector((state) => state.Nodes.nodes);

    const setIfCondition = (e) => {
        
        for(let i = 0; i < Nodes.length; i++){

            if(Nodes[i].id === props.id){
                Nodes[i].nodeData.setCodeBlock(`if~${e.target.value}`);
                console.log('node is : ' , Nodes[i]);
                break;
            }

        }


    }


    return (
        <div>
            <center>
                <label>If</label>
            </center>
            <Grid container spacing={2}>

                <Grid item xs={12}>
                    
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <TextField onChange={(e) => setIfCondition(e)} id="outlined-basic" label="If Condition" variant="outlined" size="small" />
                    </FormControl>


                </Grid>

            </Grid><br/>

            <Handle
                id="input"
                type="target"
                position="top"
                style={{ background: '#555' }}
                isConnectable={true}
            />

            <Handle
                position="bottom"
                id="truePath"
                style={{ bottom: 10, background: '#555' }}
                isConnectable={true}
            />

            <Handle
                position="right"
                id="falsePath"
                style={{ top: 10, background: '#555' }}
                isConnectable={true}
            />
            

        </div>
    )
}

export default IfNode