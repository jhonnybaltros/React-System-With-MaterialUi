import { Grid, } from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import Controls from '../../Components/controls/Controls';
import {useForm, Form} from '../../Components/useForm';
import * as employeeService from '../../services/employeeService'

const genderItems = [
    {id:'male', title:'Male'},
    {id:'female', title:'female'},
    {id:'other', title:'Other'}
]

const initialFValues ={
    id :0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender:'male',
    departmentId:'',
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
                    <Controls.Input 
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                    />
                    <Controls.Input
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange= {handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>

                   <Controls.RadioGroup 
                   name="gender"
                   value={values.gender}
                   onChange={handleInputChange}
                   items={genderItems}
                   />
                   <Controls.Select 
                   name="departmentId"
                   label="Department"
                   value={values.departmentId}
                   onChange = {handleInputChange}
                   options={employeeService.getDepartmentCollection()}
                   />
                </Grid>
          </Grid> 
          </Form> 
    )
}
