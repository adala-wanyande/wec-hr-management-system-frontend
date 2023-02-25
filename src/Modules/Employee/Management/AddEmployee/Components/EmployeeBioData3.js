export default function EmployeeBioData3({ prevStep, nextStep, handleChange, values }) {

    //Might need a get request to provide all the roles for the dropdown field
    //Might need a get request to provide all the departments for a dropdown field

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
      
    return (
        <div>
            <form>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank Account Number</label>
                    <input type="text"  placeholder="123456789"  value =  {values.bankAccountNumber} onChange={handleChange('employeeId')} id="employeeId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bank and Bank Branch Number</label>
                    <input type="text"  placeholder="Standard Chartered Lang'ata Branch"  value =  {values.bankBranchNumber} onChange={handleChange('bankBranchNumber')} id="employeeId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estate</label>
                    <input type="text"  placeholder="Lang'ata"  value =  {values.estate} onChange={handleChange('estate')} id="employeeId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                    <input type="text"  placeholder="Customer Service"  value =  {values.department} onChange={handleChange('department')} id="employeeId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                    <input type="text"  placeholder="Customer Service Executive"  value =  {values.role} onChange={handleChange('role')} id="employeeId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="mb-6">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="profilePhoto">Upload Profile Photo</label>
                    <input id="profilePhoto" type="file" value =  {values.profilePhoto} onChange={handleChange('profilePhoto')} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                    <div class="mt-1 text-sm text-gray-500 dark:text-gray-300">A profile picture is useful to confirm your are logged into your account</div>
                </div> 
                <div class="mb-12">
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="scanOfPhysicalDocument">Upload Scan of Physical Document</label>
                    <input id="scanOfPhysicalDocument" type="file" value =  {values.scanOfPhysicalDocument} onChange={handleChange('scanOfPhysicalDocument')} class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                    <div class="mt-1 text-sm text-gray-500 dark:text-gray-300">This is the scan of the physical employee bio data form filled by the employee</div>
                </div>
                <div class="flex justify-around">
                    <button onClick = { Previous } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Previous</button>
                    <button onClick = { Continue } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
                </div>
            </form>
        </div>
    )
}