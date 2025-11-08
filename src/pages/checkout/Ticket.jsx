import './Ticket.css';
import { TicketHeader } from './TicketHeader';
import { TicketInfo } from './TicketInfo';

export function Ticket() {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <TicketHeader />
        
        <TicketInfo />
      </div>
    </div>
  );
}