import React from 'react'
import NavigationBar from '../Modules/EmployeeManagement/BasicEmployee/Components/NavigationBar'
import EmployeeDetailsDashboardButton from '../Modules/EmployeeManagement/BasicEmployee/Components/EmployeeDetailsDashboardButton'
import PageTitle from '../Modules/EmployeeManagement/BasicEmployee/Components/PageTitle'


const EmployeeBioDataDetailsDashboardPage = () => {
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
                        <p class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Human Resource</p>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <p class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Employee Bio Data Details</p>
                    </div>
                </li>
                </ol>
            </nav>
            </div>
            <PageTitle title="Manage Employee Bio Data Details Dashboard"></PageTitle>
            <p className='text-center font-light p-4'>What action would you like to perform?</p>     
            <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 p-4 m-4 grid grid-cols-2 gap-4">
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Create New Employee Bio Data Details" link="bio-data"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="View Employee Bio Data Details" link="next-of-kin"></EmployeeDetailsDashboardButton> 
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Edit Employee Bio Data Details" link="bio-data"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Delete Employee Bio Data Details" link="next-of-kin"></EmployeeDetailsDashboardButton>          
            </div>
        </div>
    </div>  
  )
}

export default EmployeeBioDataDetailsDashboardPage