import React, {useState, useRef, useEffect} from 'react'
import NavigationBar from '../Components/NavigationBar'
import ViewEmployeeBioDataSubPage1 from '../SubPages/ViewEmployeeBioDataSubPage1'
import ViewEmployeeBioDataSubPage2 from '../SubPages/ViewEmployeeBioDataSubPage2'
import ViewEmployeeBioDataSubPage3 from '../SubPages/ViewEmployeeBioDataSubPage3'
import ViewEmployeeBioDataSubPage4 from '../SubPages/ViewEmployeeBioDataSubPage4'
import {Link} from 'react-router-dom'
import NavigationButton from '../Components/NavigationButton'
import PageTitle from '../Components/PageTitle'

const ViewEmployeeBioDataPage = ({employeeId = 1}) => {

  const [employeeBioDataObject, setEmployeeBioDataObject] = useState()
  let [pageNumber, setPageNumber] = useState(1)


  const dataFetchedRef = useRef(false);

  const fetchEmployeeBioData = (employeeId) => {
      fetch(`http://localhost:8000/api/employee-bio-data/${employeeId}`)
      .then((r) => r.json())
      .then((biodata) => {
        // console.log(biodata)
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
      return (
        <div className="flex justify-center mt-8">
              <div class="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
                <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        </div>
      );
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