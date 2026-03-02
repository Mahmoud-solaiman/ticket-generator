import { Header } from "../../components/Header";
import { CheckoutMessage } from "../../components/CheckoutMessage";
import { Ticket } from "./Ticket";

export function Checkout() {
  const logInInfo = JSON.parse(sessionStorage.getItem('login-info'));
  console.log(logInInfo);
  return (
    <>
      <Header />

      <CheckoutMessage 
        nameInput={logInInfo.name} 
        emailInput={logInInfo.email} 
      />
    
      <Ticket 
        nameInput={logInInfo.name} 
        githubInput={logInInfo.github} 
        image={logInInfo.image}
      />
    </>
  );
}