import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PageTitle from '../Components/PageTitle'
import NavigationButton from '../Components/NavigationButton'
import NavigationBar from '../Components/NavigationBar'

let nextOfKinDetails = {
  "firstName": "Wesley",
  "otherNames": "Odhiambo",
  "lastName": "Wanyande",
  "relationship": "Brother",
  "nationalIdNumber": 38550526,
  "phoneNumber": 722310184,
  "personalEmail": "wesleywanyande@gmail.com"
}

const ViewEmployeeNextOfKinDetailsPage = ({employeeId = 1}) => {

  const [nextOfKin, setEmployeeNextOfKin] = useState()

  const dataFetchedRef = useRef(false);

  const fetchEmployeeNextOfKin = (employeeId) => {
      fetch(`http://localhost:8000/api/employee-next-of-kin/${employeeId}`)
      .then((r) => r.json())
      .then((nextOfKin) => {
        // console.log(biodata)
        setEmployeeNextOfKin(nextOfKin)
      })
    }

  useEffect(() => {
      if (dataFetchedRef.current) return;
      dataFetchedRef.current = true;
      fetchEmployeeNextOfKin(employeeId);
  },[])
  
  const renderPage = () => {
    if (!nextOfKin) {
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
  else if (nextOfKin) {
    return (<div className="flex justify-center mt-8">
          <ul class="sm:w-[640px] text-sm shadow-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">First Name</li>
              <li class="px-8 py-2 text-left">{nextOfKin.firstName}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Other Names</li>
              <li class="px-8 py-2 text-left">{nextOfKin.otherNames}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Last Name</li>
              <li class="px-8 py-2 text-left">{nextOfKin.lastName}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Relationship</li>
              <li class="px-8 py-2 text-left">{nextOfKin.relationship}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">National ID Number</li>
              <li class="px-8 py-2 text-left">{nextOfKin.nationalIdNumber}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Phone Number</li>
              <li class="px-8 py-2 text-left">+254{nextOfKin.phoneNumber}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Personal Email</li>
              <li class="px-8 py-2 text-left">{nextOfKin.personalEmail}</li>
            </div>
          </ul>
        </div>)
  }
}
  
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="mx-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                  <p class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">View Employee Next of Kin Details</p>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        

        <PageTitle title="View Employee Next of Kin Details"></PageTitle>
        {renderPage()}
      </div>
    </>   
    )  
}

export default ViewEmployeeNextOfKinDetailsPage