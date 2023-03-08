import React, {useState, useRef, useEffect} from 'react'
import ViewEmployeeContractDetailsSubPage1 from '../SubPages/ViewEmployeeContractDetailsSubPage1'
import ViewEmployeeContractDetailsSubPage2 from '../SubPages/ViewEmployeeContractDetailsSubPage2'
import ViewEmployeeContractDetailsSubPage3 from '../SubPages/ViewEmployeeContractDetailsSubPage3'
import NavigationBar from '../Components/NavigationBar'
import NavigationButton from '../Components/NavigationButton'
import PageTitle from '../Components/PageTitle'
import {Link} from 'react-router-dom'
import LoadingSpinner from '../Components/LoadingSpinner'

const ViewEmployeeContractDetailsPage = ({employeeId = 1}) => {
  const [employeeContractObject, setEmployeeContractObject] = useState()
  const dataFetchedRef = useRef(false);
  const fetchEmployeeContract = (employeeId) => {
      fetch(`http://localhost:8000/api/contract/${employeeId}`)
      .then((r) => r.json())
      .then((contract) => {
        setEmployeeContractObject(contract)
      })
    }
  useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetchEmployeeContract(employeeId);
  },[])
  const [pageNumber, setPageNumber] = useState(1)

  const handleNextPageClick = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
  } 

  const handlePreviousPageClick = () => {
    setPageNumber((pageNumber) => pageNumber - 1)
  }

  const renderPage = () => {
    if (!employeeContractObject) {
      return (<LoadingSpinner></LoadingSpinner>);
    }
  
    else if (employeeContractObject) {
      // Split the contract object into chunks for each of the pages
      let chunk1 = Object.entries(employeeContractObject).slice(0,8).map(entry => entry[1]);
      let chunk2 = Object.entries(employeeContractObject).slice(8,12).map(entry => entry[1]);
      let chunk3 = Object.entries(employeeContractObject).slice(12,13).map(entry => entry[1]);
        
      switch (pageNumber) {
        case 1:
          return (
            <>
              <ViewEmployeeContractDetailsSubPage1 contractDetails={chunk1} handleNextPageClick={handleNextPageClick}></ViewEmployeeContractDetailsSubPage1>
            </>     
          )
        case 2:
          return (
            <>
              <ViewEmployeeContractDetailsSubPage2 contractDetails={chunk2} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeContractDetailsSubPage2>
            </>
          )
        case 3:
          return (
            <>
              <ViewEmployeeContractDetailsSubPage3 contractDetails={chunk3} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeContractDetailsSubPage3>
            </>
          )
        default:
        break;
      }
    }
  }

  return(
    <>
      <NavigationBar></NavigationBar>
      <div className="mx-4 p-4 pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <NavigationButton buttonText="Back to Contracts Dashboard" link="../employee/basic/contracts"></NavigationButton>
        </div>

        {/* <!-- Breadcrumb --> */}
        <div className="mt-2 mb-4">
          <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <Link to="../employee/basic" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Employee Details Dashboard
                </Link>
              </li>
              <li>
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <Link to="../employee/basic/contracts" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Employee Contract Details Dashboard</Link>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">View Employee Contract Details</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        

        <PageTitle title="View Employee Contract Details"></PageTitle>
        {renderPage()}
      </div>
    </>
  );

}

export default ViewEmployeeContractDetailsPage