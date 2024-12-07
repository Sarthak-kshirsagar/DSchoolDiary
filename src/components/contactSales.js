// import React from 'react';
// import './style.css';
// const ContactSales = () => {
//   return (
//     <div className="contactSales">
//       <div className="contactLeft">
//         <img src="/sales.png" alt="Sales Team" />
//       </div>
//       <div className="contactRight">
//         <p className="leftSupportHeading">Contact With our Sales Team.</p>
//         <div className="form-container">
//           <form className="custom-form">
//             <div className="form-row">
//               <input type="text" name="first-name" placeholder="First Name" required />
//               <input type="text" name="last-name" placeholder="Last Name" required />
//             </div>
//             <div className="form-row">
//               <input type="email" name="email" placeholder="Email Address" required />
//             </div>
//             <div className="form-row">
//               <textarea name="description" rows="5" placeholder="Enter your message here..." required></textarea>
//             </div>
//             <div className="form-row">
//               <button type="submit">Send</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSales;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './style.css';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
const userId = process.env.REACT_APP_EMAILJS_USER_ID; // Replace with your EmailJS user ID

const ContactSales = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId);
    // Map formData to the template placeholders
    const emailData = {
      to_name: 'DSchoolDiary Team', // Recipient name
      from_name: `${formData.firstName} ${formData.lastName}`, // Sender name
      sender_email: `${formData.email}`,
      message: formData.message, // Message content
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then((response) => {
        alert('Message sent successfully!');
        console.log('Email sent:', response.text);
        setFormData({ firstName: '', lastName: '', email: '', message: '' }); // Reset form
      })
      .catch((error) => {
        console.log(error);
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contactSales">
      <div className="contactLeft">
        <img src="/sales.png" alt="Sales Team" />
      </div>
      <div className="contactRight">
        <p className="leftSupportHeading">Contact With our Sales Team.</p>
        <div className="form-container">
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <textarea
                name="message"
                rows="5"
                placeholder="Enter your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-row">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
