import { FormControl, 
        FormControlLabel, 
        FormLabel, 
        Grid, 
        makeStyles, 
        RadioGroup, 
        TextField, Radio } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import {useForm, Form} from '../../Components/useForm';



const initialFValues ={
    id :0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender:'male',
    departmentID:'',
    hireDate: new Date(),
    isPermanent:false,
}

export default function EmployeeForm() {
   
   

   const{
    values, 
    setValues,
    handleInputChange
   } =useForm(initialFValues);

    
    return (
        
          <Form>  
          <Grid container >
                <Grid item xs={6}>
                    <TextField 
                    variant="outlined"
                    label="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange= {handleInputChange}
                    />
                    <TextField 
                    variant="outlined"
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange= {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                   <FormControl>
                       <FormLabel>Gender</FormLabel>
                        <RadioGroup row={true}
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio/>} label="male" />
                            <FormControlLabel value="female" control={<Radio/>} label="female" />
                            <FormControlLabel value="other" control={<Radio/>} label="other" />
                        </RadioGroup> 
                   </FormControl>
                </Grid>
          
          </Grid> 
          </Form> 
    )
}
