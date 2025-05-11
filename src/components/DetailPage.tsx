import React, { useState } from "react";
import Form from "./Form";
import "./DetailPage.css";
import Ticket from "./Ticket";

const DetailPage = () => {
  interface FormData {
    fullName: string;
    email: string;
    github: string;
    avatar: any;
  }

  const [formData, setFormData] = useState<FormData | null>(null);
  console.log("Details page", formData)
  return (
    <>
      {formData ? (
        <>
          
          <p className="mainHeading">
            Congrats, {formData.fullName} ! <br /> Your ticket is ready.
          </p>
          <p className="subHeading">
            We've emailed your ticket on <br/> {formData.email} and will send updates <br/>
            on your mail.
          </p>
          <Ticket data={formData}/>
        </>
      ) : (
        <div>
          <p className="mainHeading">
            Your Journey to Coding Conf <br /> 2025 Starts Here!
          </p>
          <p className="subHeading">
            Secure your spot at next years biggest coding conference
          </p>
          <Form onSubmit={setFormData} />
        </div>
      )}
    </>
  );
};

export default DetailPage;
