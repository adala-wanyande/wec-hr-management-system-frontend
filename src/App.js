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
import EmployeeDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/EmployeeDashboardPage';
import EmployeeDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/EmployeeDetailsDashboardPage';
import EmployeeBioDataDetailsSelectionPage from './Modules/EmployeeManagement/HRandMD/Pages/EmployeeBioDataDetailsSelectionPage';
import EmployeeBioDataDetailsDashboardPage from './Modules/EmployeeManagement/HRandMD/Pages/EmployeeBioDataDetailsDashboardPage';
import CreateEmployeeBioDataDetailsPage from './Modules/EmployeeManagement/HRandMD/Pages/CreateEmployeeBioDataDetailsPage';


function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/employee/" element={<EmployeeDetailsDashboard />} />
          <Route path="/employee/bio-data" element={<ViewEmployeeBioDataPage />} />
          <Route path="/employee/next-of-kin" element={<ViewEmployeeNextOfKinDetailsPage />} />
          <Route path="/employee/dependent" element={<ViewEmployeeDependentDetails />} />
          <Route path="/employee/spouse" element={<ViewEmployeeSpouseDetailsPage />} />
          <Route path="/employee/role" element={<ViewEmployeeRoleAndDepartmentDetailsPage />} />
          <Route path="/employee/contracts" element={<ViewEmployeeContractDetailsDashboard />} />
          <Route path="/employee/contract" element={<ViewEmployeeContractDetailsPage />} />

          {/* Test routes */}
          <Route path="/test/1" element={<EmployeeDashboardPage />} />
          <Route path="/test/2" element={<EmployeeDetailsDashboardPage />} />
          <Route path="/test/3" element={<EmployeeBioDataDetailsSelectionPage />} />
          <Route path="/test/4" element={<EmployeeBioDataDetailsDashboardPage />} />
          <Route path="/test/5" element={<CreateEmployeeBioDataDetailsPage />} />
       </Routes>
    </>
  );
}

export default App;
