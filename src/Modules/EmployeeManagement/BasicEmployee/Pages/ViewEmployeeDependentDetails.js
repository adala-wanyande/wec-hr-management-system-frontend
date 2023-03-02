import React, {useEffect, useState, useRef} from 'react'
import ViewEmployeeDependentDetailsPage from './ViewEmployeeDependentDetailsPage'

const ViewEmployeeDependentDetails = ({employeeId = 5}) => {
    const [employeeDependentsArray, setEmployeeDependentsArray]  = useState([])
    const fetchEmployeeDependents = (employeeId) => {
      fetch(`http://localhost:8000/api/employee-dependents/${employeeId}`)
      .then(r => r.json())
      .then((dependents) => {
        setEmployeeDependentsArray(dependents) 
      })
    }
    useEffect(() => {
        fetchEmployeeDependents(employeeId);
    },[])
  console.log(employeeDependentsArray)    

    return <ViewEmployeeDependentDetailsPage dependents={employeeDependentsArray}></ViewEmployeeDependentDetailsPage>
}

export default ViewEmployeeDependentDetails