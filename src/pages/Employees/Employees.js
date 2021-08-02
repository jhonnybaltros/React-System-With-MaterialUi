import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../Components/PageHeader';
import PeopleOutlineTwoToneIcon  from '@material-ui/icons/PeopleAltTwoTone';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme =>({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

export default function Employees() {

    const classes = useStyles();

    return (
        <>
        <PageHeader
          title="New Employee"
          subtitle="Form design with validation"
          icon = {<PeopleOutlineTwoToneIcon fontSize="large" />}
          />
          <Paper className={classes.pageContent}>
              <EmployeeForm />
          </Paper>   
        
        </>
    )
}
