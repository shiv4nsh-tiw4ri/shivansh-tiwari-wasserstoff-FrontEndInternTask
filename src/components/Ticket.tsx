import React from "react";
import "./Ticket.css";
// import "./Form.css";

interface TicketProps {
  data: {
    avatar: string;
    fullName: string;
    email: string;
    github: string;
  };
}

const Ticket: React.FC<TicketProps> = ({ data }) => {
  return (
    <div className="ticket-wrapper">
      <div className="ticket-card">
        <h2 className="ticket-title">Coding Conf</h2>
        <div className="ticket-divider"></div>
        <div className="ticket-date-location">
          Dec 31, 2025 &nbsp; | &nbsp; Austin, TX
        </div>
        <div className="ticket-user">
          <img src={data.avatar} alt="Avatar" className="ticket-avatar" />
          <div>
            <div className="ticket-name">{data.fullName}</div>
            <div className="ticket-github">@{data.github.split("/").pop()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
