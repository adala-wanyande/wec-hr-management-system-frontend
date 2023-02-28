import LoginForm from "./Components/LoginForm";
import Card from "./Components/Card";
import Title from "./Components/Title";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function LoginPage() {
  return (
    <>
      <Navbar></Navbar>
      <Card>
        <Title title="Sign in" description="Sign in using your staff number and password"></Title>
        <LoginForm></LoginForm>
      </Card>
      <Footer></Footer>
    </>
  )
}

