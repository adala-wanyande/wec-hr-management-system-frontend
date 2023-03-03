import React from 'react'
import NavigationButton from '../Components/NavigationButton'
import LoadingSpinner from '../Components/LoadingSpinner'

const ViewEmployeeContractDetailsSubPage3 = ({handlePreviousPageClick, contractDetails}) => {
  if (!contractDetails) {
    return (
      <LoadingSpinner></LoadingSpinner>
    )
  }
  else if (contractDetails) {
  return (    
    <>
      <div className="flex justify-center mt-8">
        <ul class="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Scan of Signed Contract</li>
            <li class="px-8 py-2 text-left">{contractDetails[0]}</li>
          </div>
        </ul>
      </div>
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Page" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
      </div>
    </>
  )}
}

export default ViewEmployeeContractDetailsSubPage3