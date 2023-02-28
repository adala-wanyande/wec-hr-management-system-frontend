import React from 'react'
import NavigationButton from '../Components/NavigationButton'

//Dummy state
let contractDetails = {
  "detailsOfOtherBenefits": "Lunch provided on a daily basis. Transport to and from the office provided on a daily basis.",
  "hoursOfWorkPerWeek": 50,
  "termsAndConditionsRelatingToEntitlementOfAnnualLeave": "Employee must work 6 days per week from Monday to Saturday. They must clock into work at 07:30am and clock out at 05:30pm.",
  "lengthOfNoticeRequiredToTerminateTheContract": 28
}


const ViewEmployeeContractDetailsSubPage2 = ({handleNextPageClick, handlePreviousPageClick}) => {
  return (    
    <>
      <div className="flex justify-center mt-8">
        <ul class="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Details of Other Benefits</li>
            <li class="px-8 py-2 text-left">{contractDetails.detailsOfOtherBenefits}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Hours of Work Per Week</li>
            <li class="px-8 py-2 text-left">{contractDetails.hoursOfWorkPerWeek}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Terms and Conditions Relating to Entitlement of Annual Leave</li>
            <li class="px-8 py-2 text-left">{contractDetails.termsAndConditionsRelatingToEntitlementOfAnnualLeave}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Length of Notice Required to Terminate Contract</li>
            <li class="px-8 py-2 text-left">{contractDetails.lengthOfNoticeRequiredToTerminateTheContract}</li>
          </div>
        </ul>
      </div>
      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Page" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
        <div className="col-start-5 col-span-1">
          <NavigationButton buttonText="Next Page" handleClick={handleNextPageClick}></NavigationButton>
        </div>
      </div>
    </>
  )
}

export default ViewEmployeeContractDetailsSubPage2