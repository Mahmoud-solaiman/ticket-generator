import './Ticket.css';
import { TicketHeader } from './TicketHeader';
import { TicketInfo } from './TicketInfo';

export function Ticket({ nameInput, githubInput, image }) {
  return (
    <div className="ticket-container">
      <div className="ticket">
        <TicketHeader />
        
        <TicketInfo 
          nameInput={nameInput} 
          githubInput={githubInput} 
          image={image}  
        />
      </div>
    </div>
  );
}