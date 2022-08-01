import React from 'react';
import ReactGA from 'react-ga';
import Head from '../Components/Head';
import Title from '../Components/Title';
import Footer from '../Components/Footer';
import {contact} from '../lng/fr';

const Contact = () => {
/*     const [status, setStatus] = useState("Submit");
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
}; */

    ReactGA.initialize('UA-000000-01');
    ReactGA.pageview(window.location.pathname + window.location.search);
    return (
        <div className="contact">
            <Head title="Me contacter" />
            <Title text="Me contacter" />
            <div className='data-container'>
{/*     <form onSubmit={handleSubmit}>
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
    </form> */}
    <div class="form-style-3">
<form>
<fieldset><legend>{ contact.title }</legend>
<label for="field1"><span>{ contact.label_name } <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
<label for="field2"><span>{ contact.label_email }  <span class="required">*</span></span><input type="email" class="input-field" name="field2" value="" /></label>
<label for="field3"><span>{ contact.label_phone }  <span class="required">*</span></span><input type="text" class="input-field" name="field3" value="" /></label>
<label for="field4"><span>{ contact.label_object } </span><select name="field4" class="select-field">
<option value="Appointment">{ contact.label_object1 }</option>
<option value="Interview">{ contact.label_object2 }</option>
<option value="Regarding a post">{ contact.label_object3 }</option>
</select></label>
</fieldset>
<fieldset><legend>{ contact.label_msg } </legend>
<label for="field6"><span>{ contact.label_name } <span class="required">*</span></span><textarea name="field6" class="textarea-field"></textarea></label>
<label><span> </span><input type="submit" value="Submit" /></label>
</fieldset>
</form>
</div>
    </div>
      <Footer />
        </div>
    );
};

export default Contact;