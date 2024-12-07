import React, { forwardRef, useRef } from 'react';

const WhyDSchoolDiary = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="whyDSchoolDiary">
      <p className="mainHead">Why DSchoolDiary..?</p>
      <div className="whySectionOne">
        <p>
          [App Name] transforms the way schools, teachers, and parents connect by providing a unified platform for
          communication and insights. It saves time, reduces manual effort, and ensures parents stay informed about
          their child’s progress.
        </p>
      </div>
      <div className="whySectionTwo">
        <div className="features">
          {[
            {
              header: 'Real-Time Updates',
              description:
                'Instantly receive updates on class activities, important announcements, and event schedules. Never miss out on what’s happening at school.',
              image: '/parents.jpg',
            },
            {
              header: 'Attendance Tracking',
              description:
                'Keep track of your child’s attendance with detailed daily, weekly, and monthly reports. Get notified if your child misses a class.',
              image: '/parents.jpg',
            },
            {
              header: 'Marks and Progress Reports',
              description:
                'Access detailed performance reports to monitor academic growth. Receive actionable feedback from teachers to help your child excel.',
              image: '/parents.jpg',
            },
            {
              header: 'Class-Specific Chatting',
              description:
                'Engage in seamless, secure communication with teachers for class-specific discussions. Collaborate effectively to address any concerns.',
              image: '/parents.jpg',
            },
            {
              header: 'Feedback Collection',
              description:
                'Teachers can gather valuable feedback from parents to improve the learning experience. Parents can share insights to create a collaborative environment.',
              image: '/parents.jpg',
            },
            {
              header: 'Data-Driven Insights',
              description:
                'Analyze your child’s academic trends and activities over time. Use insights to explore career pathways and unlock future opportunities.',
              image: '/parents.jpg',
            },
          ].map((feature, index) => (
            <div className="individualFeature" key={index}>
              <div className="individualFeatureHeaderr">
                <p>{feature.header}</p>
                <div className="individualFeatureContent_mobile">
                  <img src={feature.image} alt="" />
                </div>
                <p>{feature.description}</p>
              </div>
              <div className="individualFeatureContent">
                <img src={feature.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default WhyDSchoolDiary;
