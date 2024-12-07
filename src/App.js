import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/header';
import Intro from './components/intro';
import DetailedIntro from './components/detailedIntro';
import WhyDSchoolDiary from './components/whySchoolDiary';
import Support from './components/support';
import ContactSales from './components/contactSales';
import Footer from './components/footer';
import TermsOfUse from './pages/terms';
import PrivacyPolicy from './pages/privacy';
import ConsentManagement from './pages/consentMng';
import UserConsentForm from './pages/userConsent';
import './components/style.css';
import React, { useRef, useEffect } from "react";

function App() {
  const whyDSchoolDiaryRef = useRef(null);
  useEffect(() => {
    console.log("whyDSchoolDiaryRef.current:", whyDSchoolDiaryRef.current);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header whyDSchoolDiaryRef={whyDSchoolDiaryRef} />
        <div className="content-wrapper">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Intro />
                  <DetailedIntro />
                  <WhyDSchoolDiary ref={whyDSchoolDiaryRef} />
                  <Support />
                  <ContactSales />
                </>
              }
            />
            {/* Other Routes */}
            <Route path="/terms" element={<TermsOfUse />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/user-consent" element={<UserConsentForm />} />
            <Route path="/consent-mng" element={<ConsentManagement />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
