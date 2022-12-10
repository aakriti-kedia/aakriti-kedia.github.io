import React from 'react'
import Pdf from '../assets/pdfs/resume.pdf';
const Resume = () => {
    return (
        <div className="about-container">
        <div className="about-intro">
        <div> 
            <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Pdf</a>
        </div>
        </div>
        </div>
    );
}
export default Resume;