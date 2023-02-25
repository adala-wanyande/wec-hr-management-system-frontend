import React, {useState} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeBioDataSubPage1 from '../SubPages/ViewEmployeeBioDataSubPage1'
import ViewEmployeeBioDataSubPage2 from '../SubPages/ViewEmployeeBioDataSubPage2'
import ViewEmployeeBioDataSubPage3 from '../SubPages/ViewEmployeeBioDataSubPage3'
import ViewEmployeeBioDataSubPage4 from '../SubPages/ViewEmployeeBioDataSubPage4'

//Dummy state

const ViewEmployeeBioDataPage = () => {
  let [pageNumber, setPageNumber] = useState(1)

  const handleNextPageClick = () => {
      setPageNumber(pageNumber++)
  }

  const handlePreviousPageClick = () => {
      setPageNumber(pageNumber--)
    } 
  
  switch (pageNumber) {
    case 1:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeBioDataSubPage1 handleNextPageClick={handleNextPageClick}></ViewEmployeeBioDataSubPage1>
        </>
      )
    case 2:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeBioDataSubPage2 handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeBioDataSubPage2>
        </>
      )
    case 3:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeBioDataSubPage3 handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeBioDataSubPage3>
        </>
      )
    case 4:
      return (
        <>
          <NavigationBar></NavigationBar>
          <ViewEmployeeBioDataSubPage4 handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeBioDataSubPage4>
        </>
      )
    default:
      break;
  }
}

export default ViewEmployeeBioDataPage