import React from "react";

import LinkedInPage from './linkedinrecos';

import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
        I am a first-year graduate student, pursuing my master's in Computer Science at the University of California, San Diego. I am a passionate software engineer with 2.5 years of professional experience at Walmart Global Tech, India. I love to collaborate and brainstorm on innovative solutions for real-world challenges. Having contributed to diverse strategic and engineering initiatives, with primary focus on software development including APIs creation, real-time data updates, pipeline building, on-call duties, developing autoscaling and alerting platforms, etc, I am technically confident and aspire to work on challenging large-scale problems with cutting-edge technology to carve an exponential growth curve.
        </p>
        <p className="about-details">
        My technical foundations are rooted in my undergrad college, Birla Institute of Technology, Mesra, India. My active participation in IEEE, Student's Chapter and volunteering in workshops gave me a strong grasp of Java, Python, and C++. The classroom courses built my concepts in Operating Systems, Database Management, Data structures, and Algorithms and my qualification in the Smart India Hackathon, 2019 gave me exposure to the world of Machine Learning. With these varied learnings, I graduated as the Gold Medalist from my university with a formidable 9.2 GPA in 2020.
        </p>
        <p className="about-details">
        I also like to volunteer in activities as it helps me pay back to my community. Some of my previous contributions include a Wordpress website creation for an Indian NGO (Nirman for the Specially Abled), leading the 'Education initiative' of National Service Scheme (NSS), BIT Mesra, teaching Maths and Science to underprivileged students, organizing and participating in cleanliness and plantation drives as part of 'Environmental initiative' of NSS.
        </p>
      </div>
      <div className="linkedin-recos">
      <LinkedInPage/>
      </div>
    </div>
  );
}

export default About;