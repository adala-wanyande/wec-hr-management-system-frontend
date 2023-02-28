import React from 'react'
import NavigationButton from '../Components/NavigationButton'

const ViewEmployeeDependentDetailsSubPage = ({dependentDetails, isFirstPage, isLastPage, hasMultiplePages, handleNextPageClick, handlePreviousPageClick}) => {
  let renderNavigation
  if (isFirstPage) {
     renderNavigation = (
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-5 col-span-1">
          <NavigationButton buttonText="Next Dependent" handleClick={handleNextPageClick}></NavigationButton>
        </div>
      </div>
    )
  }

  if (isLastPage) {
     renderNavigation = (
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Dependent" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
      </div>
    )
  }

  if (!isFirstPage && !isLastPage) {
     renderNavigation = (
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Dependent" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
        <div className="col-start-5 col-span-1">
          <NavigationButton buttonText="Next Dependent" handleClick={handleNextPageClick}></NavigationButton>
        </div>
      </div>
    )
  }

  if (!hasMultiplePages) {
    renderNavigation = ("")
  }


  return (
  <>
    <div className="flex justify-center mt-8">
      <ul class="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">First Name</li>
          <li class="px-8 py-2 text-left">{dependentDetails.firstName}</li>
        </div>
        <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Other Names</li>
          <li class="px-8 py-2 text-left">{dependentDetails.otherNames}</li>
        </div>
        <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Last Name</li>
          <li class="px-8 py-2 text-left">{dependentDetails.lastName}</li>
        </div>
        <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Relationship</li>
          <li class="px-8 py-2 text-left">{dependentDetails.relationship}</li>
        </div>
        <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
          <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">National ID Number/ Passport Number</li>
          <li class="px-8 py-2 text-left">{dependentDetails.nationalIdNumber}</li>
        </div>
      </ul>
    </div>
    {renderNavigation}
  </>
  )
}

export default ViewEmployeeDependentDetailsSubPage