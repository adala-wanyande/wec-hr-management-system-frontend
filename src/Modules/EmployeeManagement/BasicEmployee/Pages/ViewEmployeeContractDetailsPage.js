import React, {useState} from 'react'
import ViewEmployeeContractDetailsSubPage1 from '../SubPages/ViewEmployeeContractDetailsSubPage1'
import ViewEmployeeContractDetailsSubPage2 from '../SubPages/ViewEmployeeContractDetailsSubPage2'
import ViewEmployeeContractDetailsSubPage3 from '../SubPages/ViewEmployeeContractDetailsSubPage3'
import NavigationBar from '../Components/NavigationBar'


const ViewEmployeeContractDetailsPage = () => {
  let [pageNumber, setPageNumber] = useState(1)

  const handleNextPageClick = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  } 

  const handlePreviousPageClick = () => {
    setPageNumber((pageNumber) => pageNumber - 1)
  }
  switch (pageNumber) {
    case 1:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeContractDetailsSubPage1 handleNextPageClick={handleNextPageClick}></ViewEmployeeContractDetailsSubPage1>
        </>     
      )
    case 2:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeContractDetailsSubPage2 handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeContractDetailsSubPage2>
        </>
      )
    case 3:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeContractDetailsSubPage3 handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeContractDetailsSubPage3>
        </>
      )
    default:
    break;
  }

}

export default ViewEmployeeContractDetailsPage