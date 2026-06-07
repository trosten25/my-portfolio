import React, { useState } from 'react';
import "../styling/contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const WEB_FORM_ACESS = import.meta.env.VITE_WEB_FORM_ACESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", WEB_FORM_ACESS);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="contact-wrapper">
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="header-text">
        <h1>Contact</h1>
        <p>Any question or remarks? Just write me a message!</p>
      </div>

      <div className="glass-card">
        {/* Left Side: Contact Info */}
        <div className="info-side">
          <h2>Contact Information</h2>
          <div className="info-details">
            <div className="info-item">
              <span>📧</span>
              <p>trostendsouza@gmail.com</p>
            </div>
            <div className="info-item">
              <span>📍</span>
              <p>Panaji Goa India 403005</p>
            </div>
          </div>
          {/* <div className="social-icons">
            <div className="icon">🐦</div>
            <div className="icon">📸</div>
            <div className="icon">🔗</div>
          </div> */}
        </div>

        {/* Right Side: Form */}
        <form onSubmit={onSubmit} className="form-side">
          <div className="row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" name="first_name" required />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" name="last_name" required />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" name="phone" defaultValue="+91" required />
            </div>
          </div>

          <div className="subject-section">
            <label>Select Subject?</label>
            <div className="radio-group">
              <label><input type="radio" name="subject" value="General" defaultChecked /> General Inquiry</label>
              <label><input type="radio" name="subject" value="Brand" /> Web Dev</label>
              <label><input type="radio" name="subject" value="UIUX" /> UI/UX</label>
              <label><input type="radio" name="subject" value="Design" /> AI</label>
            </div>
          </div>

          <div className="input-group full-width">
            <label>Message</label>
            <textarea name="message" placeholder="Write your message.." required></textarea>
          </div>

          <div className="button-area">
            <button type="submit" className="submit-btn">Send Message</button>
            {result && <p className="status-text">{result}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;