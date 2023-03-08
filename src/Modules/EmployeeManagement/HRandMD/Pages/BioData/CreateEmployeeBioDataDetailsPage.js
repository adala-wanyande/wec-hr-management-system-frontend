import React, {useState} from 'react'
import NavigationBar from '../../../BasicEmployee/Components/NavigationBar'
import CreateEmployeeBioDataDetailsSubpage1 from '../../SubPages/BioData/CreateEmployeeBioDataDetailsSubpage1'
import CreateEmployeeBioDataDetailsSubpage2 from '../../SubPages/BioData/CreateEmployeeBioDataDetailsSubpage2'
import CreateEmployeeBioDataDetailsSubpage3 from '../../SubPages/BioData/CreateEmployeeBioDataDetailsSubpage3'
import CreateEmployeeBioDataDetailsSubpage4 from '../../SubPages/BioData/CreateEmployeeBioDataDetailsSubpage4'
import SuccessAlert from '../../Components/SuccessAlert'
import { Link } from 'react-router-dom'
import NavigationButton from '../../../BasicEmployee/Components/NavigationButton'
import PageTitle from '../../../BasicEmployee/Components/PageTitle'

const CreateEmployeeBioDataDetailsPage = () => {
    // REQUIREMENTS FOR THIS COMPONENT
    // - Should manage view state appropriately (page change etc.)
    // - Return specific view based on particular view state
    // - Should maintain form state despite the change in pages
    // - Should validate the form and return error messages within each sub page
    // - A user should only be able to go to the next page of the form if they have met all the form requirements 
    //   for that page
    // - Once form is fully validated (last page has passed validation and form data is fully available): 
        // - A post request should be able to be made to the back end 
        // - As the form is being submitted and the page is waiting for a request, the following things should
        //   happen:
                // - Form submit button should be disabled
                // - Loading screen/ spinner should be displayed
    // - Upon succesful POST request, the SuccessPage (sent down as a prop and rendered instead of subpage4's content) 
    //   should be displayed, with navigation back to the home page offered 

    // Task 1 - Page state management
    const [pageNumber, setPageNumber] = useState(1)
    const handleNextPageClick = () => {
        setPageNumber((pageNumber) => {return pageNumber + 1})
    }
    const handlePreviousPageClick = () => {
      setPageNumber((pageNumber) => {return pageNumber - 1})
    } 
    const successAlertObject = <SuccessAlert successMessage="You have successfully created new employee bio data details for Employee ID: 8801"></SuccessAlert>

    const handleSubmit = () => {
        setPageNumber((pageNumber) => 5)
    }

    const renderPage = () => {
        switch (pageNumber) {
            case 1:
              return (
                <>
                  <CreateEmployeeBioDataDetailsSubpage1 handleNextPageClick={handleNextPageClick}></CreateEmployeeBioDataDetailsSubpage1>
                </>
              )
            case 2:
              return (
                <>
                  <CreateEmployeeBioDataDetailsSubpage2 handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></CreateEmployeeBioDataDetailsSubpage2>
                </>
              )
            case 3:
              return (
                <>
                  <CreateEmployeeBioDataDetailsSubpage3 handleNextPageClick={handleNextPageClick} handlePreviousPageClick={handlePreviousPageClick}></CreateEmployeeBioDataDetailsSubpage3>
                </>
              )
            case 4:
              return (
                <>
                  <CreateEmployeeBioDataDetailsSubpage4 SuccessAlert={successAlertObject} handlePreviousPageClick={handlePreviousPageClick} handleSubmit={handleSubmit}></CreateEmployeeBioDataDetailsSubpage4>
                </>
              )
            case 5:
              return (
                <>
                  {successAlertObject}
               </>
            );
            default:
              break;
          }
    }
    
  return (
    <>
        <NavigationBar></NavigationBar>
        <div className="mx-4 p-4 pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="">
            <NavigationButton buttonText="Back to Dashboard" link="../employee"></NavigationButton>
        </div>
        {/* <!-- Breadcrumb --> */}
        <div className="mt-2 mb-4">
            <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <Link to="../employee" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Employee Details Dashboard
                        </Link>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <Link href="../employee/contracts" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Employee Contract Details Dashboard</Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div class="flex items-center">
                            <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Create New Employee Bio Data Details</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>
        <PageTitle title="Create New Employee Bio Data Details"></PageTitle>
        {renderPage()}
      </div>
    </>
  )
}

export default CreateEmployeeBioDataDetailsPage