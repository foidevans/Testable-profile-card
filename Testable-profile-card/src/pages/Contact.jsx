import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email.";

    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim()) newErrors.message = "Message is required.";
    else if (message.length < 10)
      newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    console.log(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Form submitted successfully");
      setTimeout(() => setSuccess (''), 3000)
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setSuccess("");
    }
  };
  return (
    <>
    <Navbar />
      <main className="contactForm">
        <div className="headerText">
          <h1>Contact Us</h1>
        </div>
        <form noValidate onSubmit={handleSubmit}>
          <div className="contactFormInfo">
            <label htmlFor="name">Full Name:</label>

            <input
              id="name"
              name="name"
              type="text"
              data-testid="test-contact-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-describedby={errors.name ? "error-name" : undefined}
            />
            {errors.name && (
              <div id="error-name" className="errorText" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          <div className="contactFormInfo">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              data-testid="test-contact-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "error-email" : undefined}
            />

            {errors.email && (
              <div id="error-email" className="errorText" role="alert">
                {errors.email}
              </div>
            )}
          </div>

          <div className="contactFormInfo">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              data-testid="test-contact-subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-describedby={errors.subject ? "error-subject" : undefined}
            />
            {errors.subject && (
              <div id="error-subject" className="errorText" role="alert">
                {errors.subject}
              </div>
            )}
          </div>

          <div className="contactFormInfo">
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              data-testid="test-contact-message"
              required
              minLength={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-describedby={errors.message ? "error-message" : undefined}
            />
            {errors.message && (
              <div id="error-message" className="errorText" role="alert" data-testid="test-contact-error">
                {errors.message}
              </div>
            )}
          </div>

          <div className="formButton">
            <button type="submit" data-testid="test-contact-submit">
              Submit
            </button>
          </div>
        </form>
        {success && (
          <div className="popup successMessage" role="status" aria-live="polite" data-testid="test-contact-success">
            {success}
            <button className="closeBtn" onClick={() => setSuccess("")}>
              ×
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Contact;
