import React, { useState } from 'react';
import './pagesStyle.css'
const PrivacyPolicy = () => {
  const [expanded, setExpanded] = useState({});

  const toggleTile = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const sections = [
    {
      title: '1. User Eligibility',
      content: 'To use this App, you must be at least 18 years old or have parental consent if you are under 18. If you are under 13, your parent or guardian must provide consent for you to use the App.',
    },
    {
      title: '2. Account Registration',
      content: 'You agree to provide accurate and up-to-date information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.',
    },
    {
      title: '3. User Responsibilities',
      content: 'You agree to use the App in accordance with applicable laws and not to engage in any activity that could harm the App, its users, or its services.',
    },
    {
      title: '4. Prohibited Uses',
      content: 'You are prohibited from using the App to:\n- Violate any applicable laws.\n- Engage in abusive behavior or harassment.\n- Upload harmful content such as viruses, malware, or offensive materials.',
    },
    {
      title: '5. Intellectual Property',
      content: 'All content on the App, including text, images, and software, is the property of [App Name] or its licensors. You are granted a limited, non-transferable license to use the App for personal, non-commercial purposes.',
    },
    {
      title: '6. Limitation of Liability',
      content: '[App Name] is not liable for any damages arising from the use or inability to use the App, including data loss, interruption, or other issues.',
    },
    {
      title: '7. Termination',
      content: 'We reserve the right to suspend or terminate your access to the App if you violate these Terms.',
    },
    {
      title: '8. Governing Law',
      content: 'These Terms are governed by the laws of [Insert Jurisdiction]. Any disputes will be handled in the appropriate courts of [Insert Jurisdiction].',
    },
    {
      title: '9. Data Security',
      content: 'We implement reasonable security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. This includes encryption, secure storage, and regular security assessments.',
    },
    {
      title: '10. Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the App or via email. The updated Privacy Policy will be effective as of the date it is posted.',
    },
  ];

  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <div className="title-head">
        Effective Date: [Insert Date]
        <br />
        Welcome to [App Name] (“we,” “our,” or “us”). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and share your information when you use [App Name] (the "App").
      </div>
      
      {sections.map((section, index) => (
        <div key={index} className="tile">
          <div
            className="tile-header"
            onClick={() => toggleTile(index)}
            style={{ cursor: 'pointer' }}
          >
            <span>{section.title}</span>
            <span className="arrow" style={{ transform: expanded[index] ? 'rotate(180deg)' : 'none' }}>
              &#x25BC;
            </span>
          </div>
          {expanded[index] && (
            <div className="tile-content">
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
