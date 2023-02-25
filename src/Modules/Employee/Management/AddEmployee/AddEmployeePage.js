import AddEmployeeForm from "./Components/AddEmployeeForm";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title";
import Card from "./Components/Card";

export default function AddEmployeePage() {
    return (
        <>
            <Navbar></Navbar>
            <Card>
                <Title title="Add Employee Bio Data" description="Kindly fill all the required fields"></Title>
                <AddEmployeeForm></AddEmployeeForm>
            </Card>      
        </>
    )
}