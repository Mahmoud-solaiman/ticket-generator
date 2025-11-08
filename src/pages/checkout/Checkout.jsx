import { Header } from "../../components/Header";
import { CheckoutMessage } from "../../components/CheckoutMessage";
import { Ticket } from "./Ticket";

export function Checkout() {
  return (
    <>
      <Header />

      <CheckoutMessage />
    
      <Ticket />
    </>
  );
}