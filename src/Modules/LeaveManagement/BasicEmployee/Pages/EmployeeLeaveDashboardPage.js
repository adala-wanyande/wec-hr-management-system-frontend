import React from 'react'
import NavigationBar from '../../../EmployeeManagement/BasicEmployee/Components/NavigationBar'
import PageTitle from '../../../EmployeeManagement/BasicEmployee/Components/PageTitle'
import NavigationButton from '../Components/NavigationButton'
import LeaveApplicationsTable from '../Components/LeaveApplicationsTable'

const EmployeeLeaveDashboardPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="mx-4 p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <!-- Breadcrumb --> */}
        <div className="mt-2 mb-4">
          <nav class="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <div class="flex items-center">
                <svg aria-hidden="true" class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    <p class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Leave Details Dashboard</p>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <PageTitle title="Leave Details Dashboard"></PageTitle>
        <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 p-4 m-4 sm:flex-row flex-col flex gap-16 justify-center"> 
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <h5 class="mb-2 break-words text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Annual Leave Days Remaining</h5>
              </a>
              <p class="mb-3 font-bold text-4xl text-center text-gray-700 dark:text-gray-400">12</p>
              <p class="mb-3 font-normal text-sm text-center text-gray-700 dark:text-gray-400">days</p>
              <div className='flex justify-end'>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
          </div>
          <div class="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Next Holiday</h5>
              </a>
              <p class="mb-3 font-bold text-xl text-center text-gray-700 dark:text-gray-400">Good Friday</p>
              <p class="mb-3 font-normal text-sm text-center text-gray-700 dark:text-gray-400">Fri, 7th April 2023</p>
              <div className='flex justify-end'>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
          </div>
          <div className='flex flex-col justify-center gap-6'>
            <NavigationButton buttonText='Add Leave Application' add={true}></NavigationButton>
            <NavigationButton buttonText='View Leave Types' seeMore={true}></NavigationButton>
          </div>
        </div>
        <div>
          <LeaveApplicationsTable></LeaveApplicationsTable>
        </div>
      </div>
    </div>
  )
}

export default EmployeeLeaveDashboardPage