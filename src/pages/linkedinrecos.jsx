import React from 'react';
import { useState } from 'react';

import "../styles/recommendations.css";

import Parvesh from '../assets/images/parvesh.jpeg'
import Sowmya from '../assets/images/sowmya.jpeg'
import Suman from '../assets/images/suman.jpeg'
import Kritika from '../assets/images/kritika.jpeg'
import Shirpaa from '../assets/images/shirpaa.jpeg'
import Swetha from '../assets/images/swetha.jpeg'
import Pooja from '../assets/images/pooja.jpeg'
import Vijay from '../assets/images/vijay.jpeg'
import Rahul from '../assets/images/rahul.jpeg'

const Recommendations = () => {
    const [name, setName] = useState(1);
    const recommender_st = 1;
    const recommender_en = 9;

    return (
        <div>
            <h2 class="recos-title">What some cool people say about me!</h2>

            <div class="container">
                <div class="binderleft">
                </div>

                <div class={`box ${name === 1 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Vijay} alt="Vijay Bulusu"/>
                    <p><em>I worked with Aakriti during her internship at Salesforce in Summer '23. Aakriti is outstanding. She completed her internship project well before the deadline, took on a second project and completed that too without compromising on code quality. She was very independent and was able to make progress even when the requirements were unclear and evolving. She would be an asset on any team.
                        <br></br>
                        
                    <span class="attrib"><a
                  href="https://www.linkedin.com/in/vbulusu/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    - Vijay Bulusu
                </a>
                        </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>


                <div class={`box ${name === 2 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Rahul} alt="Rahul Aggarwal"/>
                    <p><em>Aakriti is very bright and eager to learn new skills. During her internship at Salesforce, I mentored her for a competition where she and her team had to prepare a pitch for a new product at Salesforce. She takes feedback seriously and applies it diligently to make improvements. Working in a team setting, she also demonstrated great leadership and communication skills. She and her team put together a very compelling pitch which won them the top price at the competition.
                        <br></br>
                    <span class="attrib">
                    <a
                  href="https://www.linkedin.com/in/rahula1/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    - Rahul Aggarwal
                </a>
                </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>


                <div class={`box ${name === 3 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Parvesh} alt="Parvesh Garg"/>
                        <p><em>Aakriti joined the personalization team at Walmart as an intern and soon it was easy to forget her lack of experience. Her tendency to learn a new concept or technology is astronomical. She is neither void of ideas nor shy of expressing them.

                        I worked closely with her on a complex research project that she had no trouble owning end to end. She is an asset that is hard to find. One of the smartest engineers I have worked with. <br></br>
                        <span class="attrib">
                        <a
                  href="https://www.linkedin.com/in/parveshgarg/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    - Parvesh Garg
                </a>
                            
                            
                            </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 4 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Sowmya} alt="Sowmya Dayananda"/>
                        <p><em>I've worked with Aakriti since her internship with Walmart and during this journey, I've seen her quickly picking up newer and complex technologies. She has a growth mindset and a work ethic to match. She was instrumental in several initiatives and can independently drive complex projects to completion. She is confident and learns from feedback which helps her grow faster. Aakriti's ability to handle multiple technologies/tasks was unlike any I've seen before and helped increase the productivity of our team. Aakriti is an asset to any team/company and I wish her the very best !<br></br>
                        <span class="attrib">
                        <a
                  href="https://www.linkedin.com/in/sowmya-d-922a4012/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                     - Sowmya Dayananda
                </a>

                           </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 5 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Suman} alt="Suman Kumar"/>
                        <p><em>Aakriti has been a star performer throughout her career at Walmart.She takes up the complete ownership of any work assigned to her and finishes them on time with good quality.Its been a great experience working with her. She will be a great asset to any team.<br></br>
                        <span class="attrib">
                        <a
                  href="https://www.linkedin.com/in/suman-kumar-4925991b/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                     - Suman Kumar
                </a>

                            </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 6 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Pooja} alt="Pooja Khatua"/>
                        <p><em>I worked with Aakriti as a partner team colleague. She is an excellent collaborator and immense joy to be around. In addition to her regular professional activities, she is an articulate communicator and adeptly ensures that everyone is on the same page. She goes an extra mile to help others and is a great team-player. I feel delighted to offer this endorsement for Aakriti.<br></br>
                        <span class="attrib">
                        <a
                  href="https://www.linkedin.com/in/pooja-khatua-41363072/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                     - Pooja Khatua
                </a>
                            </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 7 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Shirpaa} alt="Shirpaa Manahoran"/>
                        <p><em>Aakriti is an excellent performer on the team that I managed which was observed across a spectrum of projects. Her strongest strengths are that she is extremely quick to hit the ground running and her persistence. Her curiosity backed with technical knowledge and admirable communication skills usually give a diverse perspective to engineering as well as product discussions. She has a go-getter attitude and is well respected by the other team members. She is also active across horizontal initiatives like Campus Ambassador programs, instructing tech courses at Walmart, etc. I would highly recommend Aakriti's skills to any team, I am positive she will be a great asset to the team!<br></br>
                        <span class="attrib">
                        <a
                  href="https://www.linkedin.com/in/shirpaamanoharan/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                     - Shirpaa Manahoran
                </a>
                            </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 8 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Kritika} alt="Kritika Ghatia"/>
                        <p><em>Aakriti is a self starter. She loves taking up challenges and shows perseverance and grit to deliver high quality results. This was well displayed during her tenures as a part of Personalization team at Walmart. She is technically sound and goal oriented. I recommend her for anything challenging that comes along the way.<br></br>
                        <span class="attrib">
                            - Kritika Ghatia</span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class={`box ${name === 9 ? "show" : "hide"}`}>
                    <div class="whitebox">
                        {
                            name <= recommender_st ? 
                            <></> : <i class="fas fa-arrow-left" onClick={() => setName(Math.max(recommender_st, name-1))}></i>
                        }
                        <img src={Swetha} alt="Swetha Neralur Ashwathnarayana"/>
                        <p><em>I have worked with Aakriti closely on multiple projects at Walmart Personalisation team. Her ownership skills and can do attitude are commendable. Her promptness, in depth technical knowledge and inquisitive nature will ensure timely delivery of great quality products. She is a great value addition to any team she joins.<br></br>
                        <span class="attrib">
                            
                        <a
                  href="https://www.linkedin.com/in/swetha-n-5a0488a/"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                     - Swetha Neralur Ashwathnarayana
                </a>
                </span></em></p>
                        {   
                            name >= recommender_en ? 
                            <></> : <i class="fas fa-arrow-right" onClick={() => setName(Math.min(name+1, recommender_en))}></i>
                        }
                    </div>
                </div>

                <div class="binderright">
                </div>
            </div>

        </div>
  );
}
export default Recommendations;