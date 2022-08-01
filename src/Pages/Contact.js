import React, {useState} from "react";
import ReactGA from "react-ga";
import Head from "../Components/Head";
import Title from "../Components/Title";
import Footer from "../Components/Footer";
import { contact } from "../lng/fr";

const Contact = () => {
   const [status, setStatus] = useState("Envoyé");
    const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("En cours d'envoi...");
  const { name, email, phone, message } = e.target.elements;
  let details = {
    name: name.value,
    email: email.value,
    phone: phone.value,
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

  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <div className="contact">
      <Head title="Me contacter" />
      <Title text="Me contacter" />
      <div className="data-container">
        <div className="form-style-3">
          <form  onSubmit={handleSubmit}>
            <fieldset>
              <legend>{contact.title}</legend>
              <label htmlFor="name">
                <span>{contact.label_name} <span className="required">*</span></span>
              </label>
                <input type="text" className="input-field" name="name" defaultValue="" required />
              <label htmlFor="email">
                <span>{contact.label_email} <span className="required">*</span></span>
              </label>
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  defaultValue=""
                  required
                />
              <label htmlFor="phone">
                <span>{contact.label_phone} </span>
                <input type="text" className="input-field" name="phone" defaultValue="" />
              </label>
              <label htmlFor="field4">
                <span>{contact.label_object} </span>
                <select name="field4" className="select-field">
                  <option value="obj1">{contact.label_object1}</option>
                  <option value="obj2">{contact.label_object2}</option>
                  <option value="obj3">
                    {contact.label_object3}
                  </option>
                </select>
              </label>
            </fieldset>
            <fieldset>
              <legend>{contact.label_msg} </legend>
              <label htmlFor="message">
                <span>
                  {contact.label_name} <span className="required">*</span>
                </span>
                <textarea name="message" className="textarea-field"></textarea>
              </label>
              <label>
                <span> </span>
                <input type="submit" value="Submit" /> {status}
              </label>
            </fieldset>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
