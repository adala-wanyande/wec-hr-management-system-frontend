import React, {useEffect, useState} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeDependentDetailsSubPage from '../SubPages/ViewEmployeeDependentDetailsSubPage'

//Dependent state should be an array of objects with dependents in each object.
//Each object will be passed to the subpage component as a prop using the map method

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
  const [pageCount, setPageCount] = useState()
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [maxPageNumber, setMaxPageNumber] = useState()
  const [isFirstPage, setIsFirstPage] = useState(true) //If true render only next page button
  const [isLastPage, setIsLastPage] = useState(false) //If true render only previous page button
  //Incorporate logic for middle pages using the two states directly above

  // First, Render first dependent's details using subpage component only
  

  useEffect(() => {
    setCurrentPageNumber(0)
  })

  const handlePageNextClick = () => { 
    setCurrentPageNumber((currentPageNumber) => {
      currentPageNumber++
    })
  }

  const handlePreviousPageClick = () => {
    setCurrentPageNumber((currentPageNumber) => {
      currentPageNumber++
    })
  }
  return (
    <>
      <NavigationBar></NavigationBar>
      <ViewEmployeeDependentDetailsSubPage dependentDetails={dependents[currentPageNumber]} isFirstPage={isFirstPage} isLastPage={isLastPage}></ViewEmployeeDependentDetailsSubPage>
    </>
  )
}

export default ViewEmployeeDependentDetailsPage