import { Header } from "../../components/Header";
import { CheckoutMessage } from "../../components/CheckoutMessage";
import { Ticket } from "./Ticket";

export function Checkout({ nameInput, emailInput, githubInput, image }) {
  return (
    <>
      <Header />

      <CheckoutMessage 
        nameInput={nameInput} 
        emailInput={emailInput} 
      />
    
      <Ticket 
        nameInput={nameInput} 
        githubInput={githubInput} 
        image={image}
      />
    </>
  );
}