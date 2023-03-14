import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewEmployeeContractDetailsDashboard from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeContractDetailsDashboard'
import ViewEmployeeRoleAndDepartmentDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeRoleAndDepartmentDetailsPage'
import ViewEmployeeSpouseDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeSpouseDetailsPage';
import ViewEmployeeNextOfKinDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeNextOfKinDetailsPage';
import ViewEmployeeDependentDetails from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeDependentDetails';
import ViewEmployeeBioDataPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeBioDataPage';
import ViewEmployeeContractDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeContractDetailsPage';
import EmployeeDetailsDashboard from './Modules/EmployeeManagement/BasicEmployee/Pages/EmployeeDetailsDashboard';
import LoginPage from './Modules/Authentication/LoginPage';
import EmployeeDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/EmployeeDetailsDashboardPage';
import EmployeeBioDataDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/BioData/EmployeeBioDataDetailsDashboardPage';
import EmployeeNextOfKinDetailsDashboard from './Modules/EmployeeManagement/HRandMD/Pages/NextOfKin/EmployeeNextOfKinDetailsDashboard';
import EmployeeRoleDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/Role/EmployeeRoleDetailsDashboardPage';
import EmployeeDepartmentDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/Department/EmployeeDepartmentDetailsDashboardPage';
import EmployeeSpouseDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/Spouse/EmployeeSpouseDetailsDashboardPage';
import EmployeeDependentDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/Dependent/EmployeeDependentDetailsDashboardPage';
import EmployeeContractDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/Contract/EmployeeContractDetailsDashboardPage';
import CreateEmployeeBioDataDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/BioData/CreateEmployeeBioDataDetailsPage';
import CreateEmployeeNextOfKinDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/NextOfKin/CreateEmployeeNextOfKinDetailsPage';
import CreateEmployeeDependentDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Dependent/CreateEmployeeDependentDetailsPage';
import CreateEmployeeSpouseDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Spouse/CreateEmployeeSpouseDetailsPage';
import CreateEmployeeRoleDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Role/CreateEmployeeRoleDetailsPage';
import CreateEmployeeDepartmentDetailsPage from './/Modules/EmployeeManagement/HRandMD/Pages/Role/CreateEmployeeRoleDetailsPage'
import CreateEmployeeContractDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Department/CreateEmployeeDepartmentDetailsPage';
import ViewEmployeeBioDataDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/BioData/ViewEmployeeBioDataDetailsPage';
import ViewEmployeeNextOfKinDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/NextOfKin/ViewEmployeeNextOfKinDetailsPage';
import ViewEmployeeDependentDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/Dependent/ViewEmployeeDependentDetailsPage';
import ViewEmployeeSpouseDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/Spouse/ViewEmployeeSpouseDetailsPage';
import ViewEmployeeRoleDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/Role/ViewEmployeeRoleDetailsPage';
import ViewEmployeeDepartmentDetailsPageHr from './/Modules/EmployeeManagement/HRandMD/Pages/Role/ViewEmployeeRoleDetailsPage'
import ViewEmployeeContractDetailsPageHr from './Modules/EmployeeManagement/HRandMD/Pages/Department/ViewEmployeeDepartmentDetailsPage';
import EditEmployeeBioDataDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/BioData/EditEmployeeBioDataDetailsPage';
import EditEmployeeNextOfKinDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/NextOfKin/EditEmployeeNextOfKinDetailsPage';
import EditEmployeeDependentDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Dependent/EditEmployeeDependentDetailsPage';
import EditEmployeeSpouseDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Spouse/EditEmployeeSpouseDetailsPage';
import EditEmployeeRoleDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Role/EditEmployeeRoleDetailsPage';
import EditEmployeeDepartmentDetailsPage from './/Modules/EmployeeManagement/HRandMD/Pages/Role/EditEmployeeRoleDetailsPage'
import EditEmployeeContractDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Department/EditEmployeeDepartmentDetailsPage';
import DeleteEmployeeBioDataDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/BioData/DeleteEmployeeBioDataDetailsPage';
import DeleteEmployeeNextOfKinDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/NextOfKin/DeleteEmployeeNextOfKinDetailsPage';
import DeleteEmployeeDependentDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Dependent/DeleteEmployeeDependentDetailsPage';
import DeleteEmployeeSpouseDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Spouse/DeleteEmployeeSpouseDetailsPage';
import DeleteEmployeeRoleDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Role/DeleteEmployeeRoleDetailsPage';
import DeleteEmployeeDepartmentDetailsPage from './/Modules/EmployeeManagement/HRandMD/Pages/Role/DeleteEmployeeRoleDetailsPage'
import DeleteEmployeeContractDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/Department/DeleteEmployeeDepartmentDetailsPage';
import EmployeeLeaveDashboardPage from './Modules/LeaveManagement/BasicEmployee/Pages/EmployeeLeaveDashboardPage';
import AddLeaveApplicationPage from './Modules/LeaveManagement/BasicEmployee/Pages/AddLeaveApplicationPage';
import ViewLeaveApplicationPage from './Modules/LeaveManagement/BasicEmployee/Pages/ViewLeaveApplicationPage';
import ViewLeaveDaysAndTypesPage from './Modules/LeaveManagement/BasicEmployee/Pages/ViewLeaveDaysAndTypesPage';
import ViewLeaveTypesPage from './Modules/LeaveManagement/BasicEmployee/Pages/ViewLeaveTypesPage';
import ViewHolidaysPage from './Modules/LeaveManagement/BasicEmployee/Pages/ViewHolidaysPage';



function App() {
  return (
    <>
       <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          {/* Employee Management */}
            {/* Basic Employee Scope  */}
            <Route path="employee/basic" element={<EmployeeDetailsDashboard />}/>
            <Route path="employee/basic/bio-data" element={<ViewEmployeeBioDataPage />} />
            <Route path="employee/basic/next-of-kin" element={<ViewEmployeeNextOfKinDetailsPage />} />
            <Route path="employee/basic/dependent" element={<ViewEmployeeDependentDetails />} />
            <Route path="employee/basic/spouse" element={<ViewEmployeeSpouseDetailsPage />} />
            <Route path="employee/basic/role" element={<ViewEmployeeRoleAndDepartmentDetailsPage />} />
            <Route path="employee/basic/contracts" element={<ViewEmployeeContractDetailsDashboard />} />
            <Route path="employee/basic/contract" element={<ViewEmployeeContractDetailsPage />} />
            {/* HR and MD Scope */}
            <Route path="/employee/hr" element={<EmployeeDetailsDashboardPage />} />
            <Route path="/employee/hr/bio-data" element={<EmployeeBioDataDetailsDashboardPage />} />
            <Route path="/employee/hr/bio-data/add" element={<CreateEmployeeBioDataDetailsPage />} />
            <Route path="/employee/hr/bio-data/view" element={<ViewEmployeeBioDataDetailsPageHr />} />
            <Route path="/employee/hr/bio-data/edit" element={<EditEmployeeBioDataDetailsPage />} />
            <Route path="/employee/hr/bio-data/delete" element={<DeleteEmployeeBioDataDetailsPage />} />
            <Route path="/employee/hr/next-of-kin/" element={ <EmployeeNextOfKinDetailsDashboard />} />
            <Route path="/employee/hr/next-of-kin/add" element={<CreateEmployeeNextOfKinDetailsPage />} />
            <Route path="/employee/hr/next-of-kin/view" element={<ViewEmployeeNextOfKinDetailsPageHr />} />
            <Route path="/employee/hr/next-of-kin/edit" element={<EditEmployeeNextOfKinDetailsPage />} />
            <Route path="/employee/hr/next-of-kin/delete" element={<DeleteEmployeeNextOfKinDetailsPage />} />
            <Route path="/employee/hr/dependent" element={<EmployeeDependentDetailsDashboardPage />} />
            <Route path="/employee/hr/dependent/add" element={<CreateEmployeeDependentDetailsPage />} />
            <Route path="/employee/hr/dependent/view" element={<ViewEmployeeDependentDetailsPageHr />} />
            <Route path="/employee/hr/dependent/edit" element={<EditEmployeeDependentDetailsPage />} />
            <Route path="/employee/hr/dependent/delete" element={<DeleteEmployeeDependentDetailsPage />} />
            <Route path="/employee/hr/spouse/" element={<EmployeeSpouseDetailsDashboardPage />} />
            <Route path="/employee/hr/spouse/add" element={<CreateEmployeeSpouseDetailsPage />} />
            <Route path="/employee/hr/spouse/view" element={<ViewEmployeeSpouseDetailsPageHr />} />
            <Route path="/employee/hr/spouse/edit" element={<EditEmployeeSpouseDetailsPage />} />
            <Route path="/employee/hr/spouse/delete" element={<DeleteEmployeeSpouseDetailsPage />} />
            <Route path="/employee/hr/role/" element={<EmployeeRoleDetailsDashboardPage />} />
            <Route path="/employee/hr/role/add" element={<CreateEmployeeRoleDetailsPage />} />
            <Route path="/employee/hr/role/view" element={<ViewEmployeeRoleDetailsPageHr />} />
            <Route path="/employee/hr/role/edit" element={<EditEmployeeRoleDetailsPage />} />
            <Route path="/employee/hr/role/delete" element={<DeleteEmployeeRoleDetailsPage />} />
            <Route path="/employee/hr/contract" element={<EmployeeContractDetailsDashboardPage />} />
            <Route path="/employee/hr/contract/add" element={<CreateEmployeeContractDetailsPage />} />
            <Route path="/employee/hr/contract/view" element={<ViewEmployeeContractDetailsPageHr />} />
            <Route path="/employee/hr/contract/edit" element={<EditEmployeeContractDetailsPage />} />
            <Route path="/employee/hr/contract/delete" element={<DeleteEmployeeContractDetailsPage/>} />
            <Route path="/employee/hr/department" element={<EmployeeDepartmentDetailsDashboardPage />} />
            <Route path="/employee/hr/department/add" element={<CreateEmployeeDepartmentDetailsPage />} />
            <Route path="/employee/hr/department/view" element={<ViewEmployeeDepartmentDetailsPageHr />} />
            <Route path="/employee/hr/department/edit" element={<EditEmployeeDepartmentDetailsPage />} />
            <Route path="/employee/hr/department/delete" element={<DeleteEmployeeDepartmentDetailsPage/>} />

          {/* Leave Management Routes */}
            {/* Basic Employee Scope */}
            <Route path="/leave/basic" element={<EmployeeLeaveDashboardPage />} />
            <Route path="/leave/basic/application/add" element={<AddLeaveApplicationPage />} />
            <Route path="/leave/basic/application/view" element={<ViewLeaveApplicationPage />} />
            <Route path="/leave/basic/breakdown/view" element={<ViewLeaveDaysAndTypesPage />} />
            <Route path="/leave/basic/types/view" element={<ViewLeaveTypesPage />} />
            <Route path="/leave/basic/holidays/view" element={<ViewHolidaysPage />} />
            {/* HR and MD Scope */}
            <Route path="/leave/hr" element={<EmployeeDetailsDashboardPage />} />
            <Route path="/leave/hr/applications/view" element={<EmployeeBioDataDetailsDashboardPage />} />
            <Route path="/leave/hr/applications/pending/view" element={<EmployeeBioDataDetailsDashboardPage />} />
            <Route path="/leave/hr/employees/view" element={<EmployeeBioDataDetailsDashboardPage />} />
            <Route path="/leave/hr/types/add" element={<EmployeeBioDataDetailsDashboardPage />} />
            <Route path="/leave/hr/holidays/add" element={<EmployeeBioDataDetailsDashboardPage />} />
       </Routes>
    </>
  );
}

export default App;
