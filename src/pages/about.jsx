import React from "react";

import "../styles/about.css";

import Recommendations from "../containers/recommendations";
// import LinkedInRecos from './linkedinrecos';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-intro">
        <p className="about-details">
        I am a passionate and driven software engineer with a strong background in Computer Science. I am graduating in December 2023 with a Master of Science degree in Computer Science from the University of California, San Diego. I am specializing in Systems and AI coursework, and have maintained a perfect CGPA of 4.0/4.0. My educational journey started at the prestigious Birla Institute of Technology in India, where I earned my Bachelor of Engineering degree in Information Technology, graduating with a remarkable CGPA of 9.2/10 and earning the Gold Medal.
        </p>
        <p className="about-details">
        In my professional journey, I had the privilege of interning at Salesforce in Summer 2023, where I contributed to cutting-edge network security projects. I also won the Global Intern Pitch Competition where me and my team leveraged AI to help high-tech companies lead to Sustainability. I have over 2 years of professional experience at Walmart Global Tech, where I played a pivotal role in developing scalable software solutions that had a significant impact on the company's success. I thrive on challenges and have a proven track record of optimizing systems, software development, security, APIs, real-time data pipelines and other efficient solutions.
        </p>
        <p className="about-details">
        In addition to my technical prowess, I have a knack for leadership and communication. I've conducted workshops, mentored students (GHC'23 OSD mentor), and even instructed engineering jargon to a 40-member PM cohort resulting in a 15% efficacy boost in PM-Engineer conversations as part of my community initiatives. I am a lifelong learner and have a diverse skill set that includes programming languages such as Golang, Java, Python, C++, Rust, and more. My expertise extends to areas like artificial intelligence, machine learning, distributed systems, and cloud technologies.
        </p>
        <p className="about-details">
        I take pride in my ability to tackle complex problems, drive innovation, and collaborate effectively with cross-functional teams. I am eagerly seeking full-time opportunities in the dynamic realm of back-end software development including security, where my go-getter attitude and relentless passion can make a meaningful impact. Please connect with me on LinkedIn and let's work together to make a positive impact in the world of technology.
        </p>
      </div>
      <div className="linkedin-recos">
        <Recommendations />
      {/* <LinkedInRecos/> */}
      </div>
    </div>
  );
}

export default About;