import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButton from '../../../BasicEmployee/Components/NavigationButton'
import PageTitle from '../../../BasicEmployee/Components/PageTitle'

const CreateEmployeeBioDataDetailsSubpage4 = ({handlePreviousPageClick, handleSubmit}) => {
  return (
        <div className="flex justify-center mt-8">
            <form className="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile photo</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Scan of Physical Employee Bio Data Form</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"/>
                </div>
                <div className='grid grid-cols-6 gap-1 pt-4 px-8 m-6'>
                    <div className="col-start-2 col-span-1">
                        <NavigationButton buttonText="Previous Page" handleClick={handlePreviousPageClick}></NavigationButton>
                    </div>
                    <div className="col-start-5 col-span-1">
                        <NavigationButton buttonText="Submit" handleClick={handleSubmit}></NavigationButton>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default CreateEmployeeBioDataDetailsSubpage4