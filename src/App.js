import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewEmployeeContractDetailsDashboard from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeContractDetailsDashboard'
import ViewEmployeeRoleAndDepartmentDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeRoleAndDepartmentDetailsPage'
import ViewEmployeeSpouseDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeSpouseDetailsPage';
import ViewEmployeeNextOfKinDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeNextOfKinDetailsPage';
import ViewEmployeeDependentDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeDependentDetailsPage';
import ViewEmployeeBioDataPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeBioDataPage';
import ViewEmployeeContractDetailsPage from './Modules/EmployeeManagement/BasicEmployee/Pages/ViewEmployeeContractDetailsPage';
import EmployeeDetailsDashboard from './Modules/EmployeeManagement/BasicEmployee/Pages/EmployeeDetailsDashboard';
import LoginPage from './Modules/Authentication/LoginPage';


function App() {
  
  // <ViewEmployeeBioDataPage></ViewEmployeeBioDataPage>
  // <ViewEmployeeContractDetailsPage></ViewEmployeeContractDetailsPage>
  // <ViewEmployeeContractDetailsDashboard></ViewEmployeeContractDetailsDashboard>
  // <ViewEmployeeNextOfKinDetailsPage></ViewEmployeeNextOfKinDetailsPage>
  // <ViewEmployeeRoleAndDepartmentDetailsPage></ViewEmployeeRoleAndDepartmentDetailsPage>
  // <ViewEmployeeSpouseDetailsPage></ViewEmployeeSpouseDetailsPage>
  return (
    <>
       <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/employee/" element={<EmployeeDetailsDashboard />} />
          <Route path="/employee/bio-data" element={<ViewEmployeeBioDataPage />} />
          <Route path="/employee/next-of-kin" element={<ViewEmployeeNextOfKinDetailsPage />} />
          <Route path="/employee/dependent" element={<ViewEmployeeDependentDetailsPage />} />
          <Route path="/employee/spouse" element={<ViewEmployeeSpouseDetailsPage />} />
          <Route path="/employee/role" element={<ViewEmployeeRoleAndDepartmentDetailsPage />} />
          <Route path="/employee/contracts" element={<ViewEmployeeContractDetailsDashboard />} />
          <Route path="/employee/contract" element={<ViewEmployeeContractDetailsPage />} />
       </Routes>
    </>
  );
}

export default App;
