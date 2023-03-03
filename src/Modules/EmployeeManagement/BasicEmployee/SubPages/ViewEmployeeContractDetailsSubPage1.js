import React from 'react'
import NavigationButton from '../Components/NavigationButton'
import LoadingSpinner from '../Components/LoadingSpinner'

const ViewEmployeeContractDetailsSubPage1 = ({handleNextPageClick, contractDetails}) => {
  let dateOfCommencementObject = new Date(contractDetails[2])
  let endOfContractObject = new Date(contractDetails[5])
  let dateOfCommencementDateString = dateOfCommencementObject.toDateString()
  let endOfContractDateString = endOfContractObject.toDateString()
  let remuneration = contractDetails[6]
  let formattedRemuneration = remuneration.toLocaleString("en-us");
  
  if (!contractDetails) {
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }
  else if (contractDetails) {
    return (    
      <>
        <div className="flex justify-center mt-8">
          <ul class="sm:w-[640px] text-sm shadow-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Job Title of Employment</li>
              <li class="px-8 py-2 text-left">{contractDetails[0]}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Job Description of Employment</li>
              <li class="px-8 py-2 text-left">{contractDetails[1]}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Date of Commencement</li>
              <li class="px-8 py-2 text-left">{dateOfCommencementDateString}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Form of Contract</li>
              <li class="px-8 py-2 text-left">{contractDetails[3]}</li>
            </div>
            <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
              <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Duration of Contract</li>
              <li class="px-8 py-2 text-left">{contractDetails[4]} months</li>
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
              <li class="px-8 py-2 text-left">{contractDetails[7]}</li>
            </div>
          </ul>
        </div>
        <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
          <div className="col-start-5 col-span-1">
            <NavigationButton buttonText="Next Page" handleClick={handleNextPageClick}></NavigationButton>
          </div>
        </div>
      </>
    )}
}

export default ViewEmployeeContractDetailsSubPage1