import React from 'react'

const LeaveApplicationsTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Leave ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Leave Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Leave Duration
                        </th>
                        <th scope="col" className="px-6 py-3">
                            From
                        </th>
                        <th scope="col" className="px-6 py-3">
                            To
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Reason
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Supporting Document
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Approved By
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
  )
}

export default LeaveApplicationsTable