import React from 'react'
import NavigationButton from '../Components/NavigationButton'

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
    <>
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
    </>
  )
}

export default ViewEmployeeContractDetailsSubPage1