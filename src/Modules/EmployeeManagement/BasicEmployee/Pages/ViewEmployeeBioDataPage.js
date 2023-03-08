import React, {useState, useRef, useEffect} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeBioDataSubPage1 from '../SubPages/ViewEmployeeBioDataSubPage1'
import ViewEmployeeBioDataSubPage2 from '../SubPages/ViewEmployeeBioDataSubPage2'
import ViewEmployeeBioDataSubPage3 from '../SubPages/ViewEmployeeBioDataSubPage3'
import ViewEmployeeBioDataSubPage4 from '../SubPages/ViewEmployeeBioDataSubPage4'
import {Link} from 'react-router-dom'
import NavigationButton from '../Components/NavigationButton'
import PageTitle from '../Components/PageTitle'
import LoadingSpinner from '../Components/LoadingSpinner'

const ViewEmployeeBioDataPage = ({employeeId = 1}) => {
  const [employeeBioDataObject, setEmployeeBioDataObject] = useState()
  const [pageNumber, setPageNumber] = useState(1)
  const dataFetchedRef = useRef(false);
  const fetchEmployeeBioData = (employeeId) => {
      fetch(`http://localhost:8000/api/employee-bio-data/${employeeId}`)
      .then((r) => r.json())
      .then((biodata) => {
        setEmployeeBioDataObject(biodata)
      })
    }
  useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetchEmployeeBioData(employeeId);
  },[])
  const handleNextPageClick = () => {
      setPageNumber((pageNumber) => {return pageNumber + 1})
  }
  const handlePreviousPageClick = () => {
    setPageNumber((pageNumber) => {return pageNumber - 1})
  } 
  const renderPage = () => {
    if (!employeeBioDataObject) {
      return (<LoadingSpinner></LoadingSpinner>);
    }
    else if (employeeBioDataObject) {    
      //Split the bio data object into 4
      let chunk1 = Object.entries(employeeBioDataObject).slice(0,8).map(entry => entry[1]);
      let chunk2 = Object.entries(employeeBioDataObject).slice(8,15).map(entry => entry[1]);
      let chunk3 = Object.entries(employeeBioDataObject).slice(15,22).map(entry => entry[1]);
      let chunk4 = Object.entries(employeeBioDataObject).slice(22,24).map(entry => entry[1]);
      switch (pageNumber) {
        case 1:
          return (
            <>
              <ViewEmployeeBioDataSubPage1 employeeBioDataDetails={chunk1} handleNextPageClick={handleNextPageClick}></ViewEmployeeBioDataSubPage1>
            </>
          )
        case 2:
          return (
            <>
              <ViewEmployeeBioDataSubPage2 employeeBioDataDetails={chunk2} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeBioDataSubPage2>
            </>
          )
        case 3:
          return (
            <>
              <ViewEmployeeBioDataSubPage3 employeeBioDataDetails={chunk3} handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></ViewEmployeeBioDataSubPage3>
            </>
          )
        case 4:
          return (
            <>
              <ViewEmployeeBioDataSubPage4 handlePreviousPageClick={handlePreviousPageClick} employeeBioDataDetails={chunk4}></ViewEmployeeBioDataSubPage4>
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
          <NavigationButton buttonText="Back to Dashboard" link="../employee"></NavigationButton>
        </div>

        {/* <!-- Breadcrumb --> */}
        <div className="mt-2 mb-4">
          <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="../employee" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Employee Details Dashboard
                </Link>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">View Employee Bio Data Details</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        

        <PageTitle title="View Employee Bio Data Details"></PageTitle>
        {renderPage()}
      </div>
    </>
  );
  
}

export default ViewEmployeeBioDataPage