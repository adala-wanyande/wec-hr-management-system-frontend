import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButton from '../../BasicEmployee/Components/NavigationButton'
import PageTitle from '../../BasicEmployee/Components/PageTitle'

const CreateEmployeeBioDataDetailsSubpage1 = () => {
  return (
        <div className="flex justify-center mt-8">
            <form className="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" id="firstName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter first name" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Other Names</label>
                    <input type="text" id="otherNames" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter other names" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" id="lastName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter last name" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                    <input type="text" id="gender" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter gender" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of Birth</label>
                    <input type="date" id="dateOfBirth" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter date of birth" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
                    <select id="nationality" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter nationality" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marital Status</label>
                    <select id="maritalStatus" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter marital status" required/>
                </div>
                <div className='grid grid-cols-6 gap-1 pt-4 px-8 m-6'>
                    <div className="col-start-5 col-span-1">
                        <NavigationButton buttonText="Next Page"></NavigationButton>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default CreateEmployeeBioDataDetailsSubpage1