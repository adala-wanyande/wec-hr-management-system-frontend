import React from 'react'
import NavigationButton from '../Components/NavigationButton'

const ViewEmployeeBioDataSubPage4 = ({employeeBioDataDetails, handlePreviousPageClick}) => {
  return (    
    <>
      <div className="flex justify-center mt-8">
        <ul class="sm:w-[640px] text-sm shadow-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Profile Photo</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails[0]}</li>
          </div>
          <div className='grid grid-cols-2 divide-x w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
            <li class="px-8 py-2 text-left bg-gray-100 dark:bg-gray-600 dark:text-gray-400">Scan of Employee Bio Data Form</li>
            <li class="px-8 py-2 text-left">{employeeBioDataDetails[1]}</li>
          </div>
        </ul>
      </div>

      <div className='flex justify-center mt-4'>
        <p className='font-bold'>Page 4/4</p>
      </div>

      <div className='grid grid-cols-6 gap-1 pt-4 px-8'>
        <div className="col-start-2 col-span-1">
          <NavigationButton buttonText="Previous Page" linkUrl="#" handleClick={handlePreviousPageClick}></NavigationButton>
        </div>
      </div>
    </>
  )
}

export default ViewEmployeeBioDataSubPage4