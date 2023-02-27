import React from 'react'
import { Link } from 'react-router-dom';

const EmployeeContractsTable = ({contracts}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Contract ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Job Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date of Commencement
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Contract Duration
                    </th>
                </tr>
            </thead>
            <tbody>
              {
                contracts.map((contract) => {
                  let dateObject = new Date(contract.dateOfCommencement);
                  let dateOfCommencementString = dateObject.toDateString();
                  return (
                      <tr key={contract.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th key={contract.id} scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {contract.contractId}
                        </th>
                        <td key={contract.id} className="px-6 py-4">
                            {contract.jobDescription}
                        </td>
                        <td key={contract.id} className="px-6 py-4">
                            {dateOfCommencementString}
                        </td>
                        {/* This field should always be in months for simplicity purposes. */}
                        <td key={contract.id} className="px-6 py-4"> 
                            {contract.contractDuration} months
                        </td>
                        <td key={contract.id} className="px-6 py-4">
                          {/* Will revisit this to add routing. */}
                            <Link to="../employee/contract" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">See more</Link>
                            {/* Add dynamic routing so that it can link to "../employee/contract/:id" */}
                        </td>
                    </tr>
                  );
                })
              } 
            </tbody>
        </table>
    </div>
  )
}

export default EmployeeContractsTable