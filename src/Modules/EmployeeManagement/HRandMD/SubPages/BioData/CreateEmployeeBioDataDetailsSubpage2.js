import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButton from '../../../BasicEmployee/Components/NavigationButton'
import PageTitle from '../../../BasicEmployee/Components/PageTitle'

const CreateEmployeeBioDataDetailsSubpage2 = ({handleNextPageClick, handlePreviousPageClick}) => {
  return (
        <div className="flex justify-center mt-8">
            <form className="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National ID Number</label>
                    <input type="text" id="nationalIdNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter national ID number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">KRA Pin Number</label>
                    <input type="text" id="kraPinNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter KRA pin number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NHIF Number</label>
                    <input type="text" id="nhifNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter NHIF number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NSSF Number</label>
                    <input type="text" id="nssfNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter NSSF number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                    <input type="text" id="phoneNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter phone number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Staff Email</label>
                    <input type="email" id="staffEmail" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter staff email" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Personal Email</label>
                    <input type="email" id="personalEmail" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter personal email" required/>
                </div>
                <div className='grid grid-cols-6 gap-1 pt-4 px-8 m-6'>
                    <div className="col-start-2 col-span-1">
                        <NavigationButton buttonText="Previous Page" handleClick={handlePreviousPageClick}></NavigationButton>
                    </div>
                    <div className="col-start-5 col-span-1">
                        <NavigationButton buttonText="Next Page" handleClick={handleNextPageClick}></NavigationButton>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default CreateEmployeeBioDataDetailsSubpage2