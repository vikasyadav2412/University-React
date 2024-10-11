import React from 'react'
import './Contact.css';

function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1e3205c5-fc3c-48a4-a6e8-0556850925f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input type="text" name="name" id="name" placeholder='Enter your name' required />
          <label htmlFor="phone">Phone number</label>
          <input type="tel" name="phone" id="phone" placeholder='Enter your phone number ' required/>
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <span >{result}</span>

          <button type='submit' className='btn dark-btn'>Submit now<img src="../../public/photos/white-arrow.png" alt="" /></button>
        </form>
    </>
  )
}

export default Form