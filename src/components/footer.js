import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="upperFooterSection">
        <div className="footerDSchoolDiary">
          <img src="/sdicon.png" alt="DSchoolDiary Icon" />
          <p>Bridging the Gap Between Parents and Teachers for a Better Tomorrow.</p>
        </div>
        <div className="getInTouch">
          <p className="footerSectionHeading">Get in Touch</p>
          <p className="jumpItems">lorem@gamil.com</p>
          <p className="jumpItems">Address:- Lorem ipsum dolor sit amet.</p>
          <p className="jumpItems">9503904361</p>
        </div>

        <div className="jumpTo">
          <p className="footerSectionHeading">Jump To</p>
          <p className="jumpItems">
          <Link to="/">Home</Link>
          </p>
          <p className="jumpItems">About</p>
          <p className="jumpItems">Our Offerings</p>
          <p className="jumpItems">Contact</p>
        </div>

        <div className="privacyPolicy">
          <p className="footerSectionHeading">Legal</p>
          <p className="jumpItems">
            <Link to="/terms">Terms of Use</Link>
          </p>
          <p className="jumpItems">
            <Link to="/privacy">Privacy Policy</Link>
          </p>
          <p className="jumpItems">
            <Link to="/user-consent">User Consent Form</Link>
          </p>
          <p className="jumpItems">
            <Link to="/consent-mng">Consent Management</Link>
          </p>
        </div>
      </div>

      <div className="lowerFooterSection">
        <p>&copy; DSchoolDiary</p>
        </div>
    </div>
  );
};

export default Footer;
