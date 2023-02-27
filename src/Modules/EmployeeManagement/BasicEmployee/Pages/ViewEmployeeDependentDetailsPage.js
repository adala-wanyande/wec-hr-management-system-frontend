import React, {useState, useEffect} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeDependentDetailsSubPage from '../SubPages/ViewEmployeeDependentDetailsSubPage'

let dependentDetails = [
  {
    "firstName": "Bernadine",
    "otherNames": "Banda",
    "lastName": "Wanyande",
    "relationship": "Sister",
    "nationalIdNumber": 38550529
  },
  {
    "firstName": "Rita",
    "otherNames": "Awino Esther",
    "lastName": "Wanyande",
    "relationship": "Sister",
    "nationalIdNumber": 38550569
  },
  {
    "firstName": "Xolani",
    "otherNames": "Misha",
    "lastName": "Mwami",
    "relationship": "Cousin",
    "nationalIdNumber": 99900111
  }
]

const ViewEmployeeDependentDetailsPage = ({dependents = dependentDetails}) => {

  const [pageDetails, setPageDetails] = useState({
    pageCount: "",
    hasMultiplePages: false,
    currentPageNumber: 1,
    isFirstPage: true,
    isLastPage: false
  })


  useEffect(() => {
    if (dependents.length > 1) {
      setPageDetails({...pageDetails, pageCount: dependents.length + 1, hasMultiplePages: true})
    }
  }, [])

  const handleNextPageClick = () => { 
    if (pageDetails.currentPageNumber === dependents.length - 1) {
      setPageDetails({...pageDetails, isLastPage: true, currentPageNumber: pageDetails.currentPageNumber + 1})
    }
    else setPageDetails({...pageDetails, isFirstPage: false, currentPageNumber: pageDetails.currentPageNumber + 1})
  }

  const handlePreviousPageClick = () => {
    if (pageDetails.currentPageNumber === 2) {
      setPageDetails({...pageDetails, isFirstPage: true, currentPageNumber: pageDetails.currentPageNumber - 1})
    }
    else setPageDetails({...pageDetails, isLastPage: false, currentPageNumber: pageDetails.currentPageNumber - 1})
  }

  return (
    <>
      <NavigationBar></NavigationBar>
      <ViewEmployeeDependentDetailsSubPage hasMultiplePages={pageDetails.hasMultiplePages} dependentDetails={dependents[pageDetails.currentPageNumber - 1]} isFirstPage={pageDetails.isFirstPage} isLastPage={pageDetails.isLastPage} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeDependentDetailsSubPage>
    </>
  )
}

export default ViewEmployeeDependentDetailsPage