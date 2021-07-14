import { Grid, makeStyles, TextField } from '@material-ui/core';
import React, {useState, useEffect} from 'react'

const useStyle = makeStyles(theme =>({
    root:{
        '& .MuiFormControl-root':{
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))

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
   
   const [values, setValues] = useState(initialFValues);
   const classes = useStyle();
    
    return (
        <form className='classes.root'>
          <Grid container>
                <Grid item xs={6}>
                    <TextField 
                    variant="outlined"
                    label="Full Name"
                    value={values.fullName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                    variant="outlined"
                    label="Email"
                    value={values.email}
                    />
                </Grid>
                <Grid item xs={6}>

                </Grid>
          
          </Grid>  
        </form>
    )
}
