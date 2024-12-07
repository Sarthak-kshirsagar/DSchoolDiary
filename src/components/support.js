import React from 'react';

const Support = () => {
  return (
    <div className="support">
      <div className="support_left">
        <p className="leftSupportHeading">Unmatched Support, Every Step of the Way</p>
        <div className="supportRight_mobile_img">
          <img src="/support.png" alt="Support" />
        </div>
        <div className="support_mobile_img">
          <img src="/support.png" alt="Support" />
        </div>
        <p className="support_content">
          At [App Name], we believe in empowering schools with seamless technology. That’s why we provide free training
          for all staff members when your school joins us. Our dedicated support team is available to assist you at any
          time, ensuring a smooth experience for both teachers and parents. With lifetime support, you can focus on
          education while we handle the rest.
        </p>
        <button className="contact-btn">
          <i className="fa fa-envelope"></i> Contact Us
        </button>
      </div>
      <div className="supportRight">
        <img src="/support.png" alt="Support" />
      </div>
    </div>
  );
};

export default Support;
