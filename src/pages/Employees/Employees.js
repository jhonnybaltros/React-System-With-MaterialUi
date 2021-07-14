import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../Components/PageHeader';
import PeopleOutlineTwoToneIcon  from '@material-ui/icons/PeopleAltTwoTone';

export default function Employees() {
    return (
        <>
        <PageHeader
      title="New Employee"
      subtitle="Form design with validation"
      icon = {<PeopleOutlineTwoToneIcon fontSize="large" />}
      />
        
        <EmployeeForm />
        </>
    )
}
