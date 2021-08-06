import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function Select(props) {

    const {name, label, value, onChange, options} = props;

    return (
       <FormControl
       variant="outlined"
       >
        <MuiSelect 
        label = {label}
        name={name}
        value= {value}
        onChange={onChange}>
            <MenuItem value="none"></MenuItem>
            {
                options.map(
                    item =>(<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>)
                )
            }
        </MuiSelect>    
        <InputLabel>{label}</InputLabel>
       </FormControl>
    )
}
