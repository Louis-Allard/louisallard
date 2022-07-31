import React, {useState} from 'react';
import ReactGA from 'react-ga';
import Head from '../Components/Head';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import {contact} from '../lng/fr';

const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");
  const { name, email, message } = e.target.elements;
  let details = {
    name: name.value,
    email: email.value,
    message: message.value,
  };
  let response = await fetch("http://localhost:3000/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(details),
  });
  setStatus("Submit");
  let result = await response.json();
  alert(result.status);
};

    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="contact">
            <Head title="Me contacter" />
            <Title text="Me contacter" />
            <div className='data-container'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">{ contact.label_name }</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">{ contact.label_email }</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">{ contact.label_msg }</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
    </div>
      <Footer />
        </div>
    );
};

export default Contact;