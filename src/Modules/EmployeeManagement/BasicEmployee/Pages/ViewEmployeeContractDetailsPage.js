// Important for storing page state for the employee contract details subpages
import React, {useState} from 'react'
import ViewEmployeeContractDetailsSubPage1 from '../SubPages/ViewEmployeeContractDetailsSubPage1'
import ViewEmployeeContractDetailsSubPage2 from '../SubPages/ViewEmployeeContractDetailsSubPage2'
import ViewEmployeeContractDetailsSubPage3 from '../SubPages/ViewEmployeeContractDetailsSubPage3'


const ViewEmployeeContractDetailsPage = () => {
  let [pageNumber, setPageNumber] = useState(1)

  const handleNextPageClick = () => {
    setPageNumber((pageNumber) => {
      pageNumber++;
    })
  }

  const handlePreviousPageClick = () => {
    setPageNumber((pageNumber) => {
      pageNumber--;
    })
  }
  switch (pageNumber) {
    case 1:
      return (<ViewEmployeeContractDetailsSubPage1></ViewEmployeeContractDetailsSubPage1>)
    case 2:
      return (<ViewEmployeeContractDetailsSubPage2></ViewEmployeeContractDetailsSubPage2>)
    case 3:
      return (<ViewEmployeeContractDetailsSubPage3></ViewEmployeeContractDetailsSubPage3>)
    default:
      break;
  }

}

export default ViewEmployeeContractDetailsPage