import React from 'react'
import {Link} from 'react-router-dom'
import NavigationButton from '../Components/NavigationButton'
import PageTitle from '../Components/PageTitle'

//Dummy state
let contractDetails = {
  "jobTitleOfEmployment": "Marketing Manager",
  "jobDescriptionOfEmployment": "Undertake market research, understand the trends and customer preferences, create marketing strategy and budgets, oversee the creation of marketing materials and content, and perform all other relevant tasks essential for increasing the business's sales.",
  "dateOfCommencement": "01/03/2023",
  "formOfContract": "Fixed Term Contract",
  "durationOfContract": 24,
  "endOfContract": "01/03/2025",
  "remuneration": 20000,
  "remunerationInterval": "Monthly"
}


const ViewEmployeeContractDetailsSubPage1 = ({handleNextPageClick}) => {
  let dateOfCommencementObject = new Date(contractDetails.dateOfCommencement)
  let endOfContractObject = new Date(contractDetails.endOfContract)
  let dateOfCommencementDateString = dateOfCommencementObject.toDateString()
  let endOfContractDateString = endOfContractObject.toDateString()
  let remuneration = contractDetails.remuneration
  let formattedRemuneration = remuneration.toLocaleString("en-us");
  return (    
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

      <div className="">
        <NavigationButton buttonText="Back to Contracts Dashboard" link="../employee/contracts"></NavigationButton>
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
                <Link to="../employee/contracts" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Employee Contract Details Dashboard</Link>
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

      <div className="flex justify-center mt-8">
        <ul class="sm:w-[640px] text-sm shadow-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Job Title of Employment</li>
            <li class="px-8 py-2 text-left">{contractDetails.jobTitleOfEmployment}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Job Description of Employment</li>
            <li class="px-8 py-2 text-left">{contractDetails.jobDescriptionOfEmployment}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Date of Commencement</li>
            <li class="px-8 py-2 text-left">{dateOfCommencementDateString}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Form of Contract</li>
            <li class="px-8 py-2 text-left">{contractDetails.formOfContract}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Duration of Contract</li>
            <li class="px-8 py-2 text-left">{contractDetails.durationOfContract} months</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">End of Contract</li>
            <li class="px-8 py-2 text-left">{endOfContractDateString}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Remuneration (Ksh)</li>
            <li class="px-8 py-2 text-left">{formattedRemuneration}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Remuneration Interval</li>
            <li class="px-8 py-2 text-left">{contractDetails.remunerationInterval}</li>
          </div>
        </ul>
      </div>
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-5 col-span-1">
          <NavigationButton buttonText="Next Page" handleClick={handleNextPageClick}></NavigationButton>
        </div>
      </div>
    </div>
  )
}

export default ViewEmployeeContractDetailsSubPage1