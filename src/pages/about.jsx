import React from "react";

import "../styles/about.css";

import LinkedInRecos from './linkedinrecos';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
        I am a passionate software engineer currently employed at Google. I graduated in 2023 from the University of California, San Diego, specializing in Systems, with a keen interest in Distributed Systems and Cloud Computing.
        </p>
        <p className="about-details">
        Throughout my professional journey, I have had the privilege of working at prominent tech giants like Google, Salesforce, and Walmart. In 2023, I interned at Salesforce, contributing to cutting-edge network security projects. I also won the Global Intern Pitch Competition, leveraging AI to help high-tech companies achieve sustainability. With over 2 years of professional experience at Walmart Global Tech, I played a pivotal role in developing scalable software solutions that significantly impacted the company's success. I thrive on challenges and have a proven track record of optimizing systems, software development, security, APIs, real-time data pipelines, and other efficient solutions.
        </p>
        <p className="about-details">
        My educational journey began at the prestigious Birla Institute of Technology in India, where I earned my Bachelor of Engineering degree in Information Technology, receiving the University Gold Medal. I pursued my Masters at the renowned University of California, San Diego, focusing on Distributed Systems, and Artificial Intelligence. I graduated with a Master of Science degree in Computer Science in December 2023. My interest areas include Distributed Systems, Cloud Computing, Networking, Security, Artificial Intelligence, Machine Learning and more.
        </p>
        <p className="about-details">
        I look forward to giving back to the community in any way possible. I've conducted workshops, mentored students (GHC'23 OSD mentor), and even instructed engineering jargon to a 40-member PM cohort resulting in a 15% efficacy boost in PM-Engineer conversations as part of my community initiatives. I am happy to mentor as well as learn from others.
        </p>
        <p className="about-details">
        Besides my ability to drive innovation and collaborate, I enjoy listening to music and driving. I am always excited to meet new people and make friends. Feel free to drop me a note on LinkedIn, and let's arrange a coffee chat!
        </p>
      </div>
      <div className="linkedin-recos">
      <LinkedInRecos/>
      </div>
    </div>
  );
}

export default About;