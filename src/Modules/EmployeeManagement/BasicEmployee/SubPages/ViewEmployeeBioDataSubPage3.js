import React from 'react'
import NavigationButton from '../Components/NavigationButton'
//Dummy prop - 3/4 of the full employee bio data details
let employeeBioData = {
  "divisionOfResidence": "Dagoretti",
  "permanentAddress": "Riara Gardens",
  "poBox": 47578,
  "postalCode": "00100",
  "bankAccountNumber": "011128610803",
  "bankName": "Standard Chartered",
  "bankBranch": "Junction Mall, Ngong' Road"
}

const ViewEmployeeBioDataSubPage3 = ({employeeBioDataDetails = employeeBioData, handleNextPageClick, handlePreviousPageClick}) => {
  return (    
    <>
      <div className="flex justify-center mt-8">
        <ul class="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Division of Residence</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.divisionOfResidence}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Permanent Address/ Estate</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.permanentAddress}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Post Office Box</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.poBox}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Postal Code</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.postalCode}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Bank Account Number</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.bankAccountNumber}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Bank Name</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.bankName}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Bank Branch</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails.bankBranch}</li>
          </div>
        </ul>
      </div>

      <div className='flex justify-center mt-4'>
        <p className='font-bold'>Page 3/4</p>
      </div>

      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Page" linkUrl="#" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
        <div className="col-start-5 col-span-1">
          <NavigationButton buttonText="Next Page" linkUrl="#" handleClick={handleNextPageClick}></NavigationButton>
        </div>
      </div>
    </>
  )
}

export default ViewEmployeeBioDataSubPage3