import React from 'react';
import './style.css'; 
 // Import the styles for this component

const DetailedIntro = () => {
  return (
    <div className="detailedIntro">
      <div className="leftSection">
        <p className="mainHead">About DSchoolDiary</p>
        <img className="mobile_img" src="/parents.jpg" alt="Parents" />
        <p className="shortDetailedInfo">
          DSchoolDiary is revolutionizing parent-teacher communication by providing a single platform for tracking
          school updates, student progress, attendance, and more. Empowering schools, teachers, and parents to work
          together for every child's success.
        </p>
        <button className="download-btn">
          <i className="fa fa-download"></i> Download App
        </button>
      </div>
      <img className="img" src="/parents.jpg" alt="Parents" />
    </div>
  );
};

export default DetailedIntro;
