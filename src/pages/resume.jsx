// IMPORT LIBRARIES
import React from "react";

// IMPORT STYLES
import "../styles/resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
        <div className="download-section">
            <a                 
            href="/resume.pdf"
            className="resume-download"
            >
            Download Resume
            </a>
        </div> 

      <div className="timeline-section resume-education">
        <div className="heading-section">
          <div className="heading">EDUCATION</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item active">
              <div className="title">
                <a
                  href="https://ucsd.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  University of California, San Diego, USA
                </a>
              </div>

              <div className="sub-title">Master of Science,{" "}
                <a
                  href="https://cse.ucsd.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Computer Science
                </a>
              </div>

              <div className="sub-sub-title">September 2022 - Current</div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://www.bitmesra.ac.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Birla Institute of Technology, Mesra, India
                </a>
              </div>

              <div className="sub-title">Bachelor of Engineering,{" "}
                <a
                  href="https://www.bitmesra.ac.in/Show_Department_Section?cid=1&deptid=70" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                  Information Technology (Computer Science)
                </a>
              </div>

              <div className="sub-sub-title">July 2016 - July 2020</div>
              <div className="content">
                <p><b>CGPA</b>: 9.2/10.0</p>
                <p>- Best outgoing student; Gold Medalist - Batch of 2020</p>
                <p>- Technical member at IEEE, Student's Chapter BIT Mesra </p>
                <p>- Executive member at National Service Scheme, BIT Mesra </p>
                <p>- Dance club member, BIT Mesra </p>
                <p>- Finalist of Smart India Hackathon, 2019 </p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                  Shiv Jyoti International School, Kota, India
              </div>

              <div className="sub-title">Higher Secondary school
              </div>

              <div className="sub-sub-title">March 2014 - May 2016</div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              <div className="title">
                  St. Joseph's Girls' High School, Cuttack, India
              </div>

              <div className="sub-title">Matriculation{" "}
              </div>

              <div className="sub-sub-title">March 2003 - May 2014</div>
              <div className="pointer"></div>
            </li>
          </ul>
        </div>
      </div>

      <div className="timeline-section resume-experience">
        <div className="heading-section">
          <div className="heading">EXPERIENCE</div>
        </div>

        <div className="timeline-container">
          <ul className="vertical-scrollable-timeline" id="vertical-scrollable-timeline">
            <div className="list-progress">
              <div className="inner">
              </div>
            </div>

            <li className="resume-item">
              <div className="title">
                <a
                  href="https://tech.walmart.com/content/walmart-global-tech/en_us.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Walmart Global Tech, Bangalore, India
                </a>
              </div>

              <div className="sub-title">
              Software Engineer 3
              </div>

              <div className="sub-sub-title">August 2022 - September 2022</div>

              <div className="content">
                <p><b>Skills</b>: (Java, Cassandra, Memcached, Postman APIs, Tempo CMS, Kafka)</p>
                <p> - Spearheaded personalized banner support in emails. W+ membership, App download, and Easter banners reported ~95% CTR (click-through rate) </p>
                <p> - Implemented and deployed pipelines that pushed TBs of data to Cassandra and cache nodes </p>
                <p> - Built a ~0.5% GMV contributing framework for assigning "Holiday Deal" badges on www.walmart.com </p>
                <p> - Rewarded Engineering Excellence Award for remarkable year-round adaptability and agility </p>
                <p> - Instructed a 40-member Product Managers cohort, familiarizing them with engineering jargon, resulting in
                a 15% efficacy boost in PM and engineering conversations </p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              {/* <div className="title">
                <a
                  href="https://tech.walmart.com/content/walmart-global-tech/en_us.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Walmart Global Tech, Bangalore, India
                </a>
              </div> */}

              <div className="sub-title">
              Software Engineering Winter intern
              </div>

              <div className="sub-sub-title">January 2020 - July 2020</div>

              <div className="content">
                <p><b>Skills</b>:  (C++, Python, Hive, GRPC, Protocol buffers, RocksDb, Docker, Kubernetes, Node.js, Cloud, WM OneOps, Linux, Bash, Testing)</p>
                <p> - Alpha-released a performance-sensitive platform to exhaustively display multidimensional insights </p>
                <p> - Automated it to send inventory, item metadata, and associate rejection stats on a daily basis </p>
                <p> - Improved Out-of-Stock item substitute recommendations based on the system reports </p>
                <p> - Expedited Node.js to Python test cases migration and received Champion Award for the impactful effort </p>
                <p> - Migrated search and reviews VM use-cases to the Walmart Cloud Native Platform saving 16+ VM costs </p>
              </div>
              <div className="pointer"></div>
            </li>

            <li className="resume-item">
              {/* <div className="title">
                <a
                  href="https://tech.walmart.com/content/walmart-global-tech/en_us.html"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resume-links"
                >
                    Walmart Global Tech, Bangalore, India
                </a>
              </div> */}

              <div className="sub-title">
              Software Engineering Summer intern
              </div>

              <div className="sub-sub-title">May 2019 - July 2019</div>

              <div className="content">
                <p><b>Skills</b>:   (Machine Learning, Hive, Spark, Node.js, Hadoop, Confluence)</p>
                <p> - Rigorously analyzed terabytes of customer data in the grocery domain revealing 15+ new insights </p>
                <p> - Implemented a word2vec ML model for item recommendations based on the latest cart updates </p>
                <p> - Designed UI to validate on-the-fly item recommendations and user experience </p>
                <p> - Received a full-time offer and accolades for internship contributions </p>
              </div>
              <div className="pointer"></div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;