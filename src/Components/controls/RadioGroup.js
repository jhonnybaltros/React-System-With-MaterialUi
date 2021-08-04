import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup, Radio } from '@material-ui/core';
import React from 'react'

export default function RadioGroup(props) {

    const {name, value, label, onChange, items} = props;

    return (
        <FormControl>
        <FormLabel>Gender</FormLabel>
         <MuiRadioGroup row
         name={name}
         value={value}
         onChange={onChange}>
             
             {
                 items.map(
                     (item, index) => (
                         <FormControlLabel value={item.id} control={<Radio />} label={item.title} />
                     )
                 )
             }
         </MuiRadioGroup> 
    </FormControl>
    )
}
