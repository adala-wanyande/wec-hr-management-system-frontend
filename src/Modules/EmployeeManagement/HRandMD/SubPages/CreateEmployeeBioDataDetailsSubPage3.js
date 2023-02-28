import React from 'react'
import { Link } from 'react-router-dom'
import NavigationButton from '../../BasicEmployee/Components/NavigationButton'
import PageTitle from '../../BasicEmployee/Components/PageTitle'

const CreateEmployeeBioDataDetailsSubpage3 = () => {
  return (
        <div className="flex justify-center mt-8">
            <form className="sm:w-[640px] text-sm font-medium shadow-md text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Division of Residence</label>
                    <select type="text" id="divisionOfResidence" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter division of residence" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Permanent Address/ Estate</label>
                    <input type="text" id="permanentAddress" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter permanent address" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PO Box</label>
                    <input type="text" id="poBox" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter PO box" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                    <input id="postalCode" type="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter postal code" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Account Number</label>
                    <input id="bankAccountNumber" tyoe="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter bank account number" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Name</label>
                    <input type="text" id="bankName" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter bank name" required/>
                </div>
                <div class="my-6 px-8 py-2 text-left dark:bg-gray-600 dark:text-gray-400">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Branch</label>
                    <input type="text" id="bankBranch" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter bank branch" required/>
                </div>
                <div className='grid grid-cols-6 gap-1 pt-4 px-8 m-6'>
                    <div className="col-start-2 col-span-1">
                        <NavigationButton buttonText="Previous Page"></NavigationButton>
                    </div>
                    <div className="col-start-5 col-span-1">
                        <NavigationButton buttonText="Next Page"></NavigationButton>
                    </div>
                </div>
            </form>
        </div>
  )
}

export default CreateEmployeeBioDataDetailsSubpage3