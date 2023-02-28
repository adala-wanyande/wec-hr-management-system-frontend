import React from 'react'
import NavigationBar from '../../BasicEmployee/Components/NavigationBar'
import EmployeeDetailsDashboardButton from '../../BasicEmployee/Components/EmployeeDetailsDashboardButton'
import PageTitle from '../../BasicEmployee/Components/PageTitle'

const EmployeeDashboardPage = () => {
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
                </ol>
                </nav>
            </div>
            <PageTitle title="Human Resource Dashboard"></PageTitle>     
            <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 p-4 m-4 grid grid-cols-2 gap-4">
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Employee Details Management" link="bio-data"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Leave Management" link="next-of-kin"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Attendance Management" link="dependent"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Performance Appraisal" link="role"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Company Policies" link="spouse"></EmployeeDetailsDashboardButton>
                <EmployeeDetailsDashboardButton className="shadow-md" buttonText="Payroll" link="contracts"></EmployeeDetailsDashboardButton>              
            </div>
        </div>
    </div>
  )
}

export default EmployeeDashboardPage