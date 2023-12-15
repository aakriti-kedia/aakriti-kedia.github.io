import React from 'react';

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

const LinkedInRecos = () => {
    function removeShow(className, ind) {
        var elms = document.getElementsByClassName(className);
        var curElm = elms[ind];
        curElm.classList.remove("show");
        curElm.classList.add("hide");
    }
    function addShow(className, ind) {
        var elms = document.getElementsByClassName(className);
        var curElm = elms[ind];
        curElm.classList.add("show");
        curElm.classList.remove("hide");
    }

    function managePage(direction, curInd, endInd) {
        if(direction === 'prev') {
            removeShow('box', curInd);
            if(curInd === 0) {
                addShow('box', endInd-1);
            } else {
                addShow('box', curInd-1);
            }
        } else {
            removeShow('box', curInd);
            if(curInd === endInd - 1) {
                addShow('box', 0);
            } else {
                addShow('box', curInd+1);
            }
        }
    }

    window.onload = function() {
        let left_arrows = document.getElementsByClassName("fa-arrow-left")
        let right_arrows = document.getElementsByClassName("fa-arrow-right")
        for(let i = 0; i < left_arrows.length; i++) {
            console.log(left_arrows[i]);
            left_arrows[i].onclick = function() {
                managePage('prev', i, left_arrows.length);
            }
            right_arrows[i].onclick = function() {
                managePage('next', i, left_arrows.length);
            }
        }
    };

    function sliderAutomated() {
        let boxes = document.getElementsByClassName("box");
        for(let i = 0; i < boxes.length; i++) {
            let box = boxes[i];
            if(box.classList.contains("show")) {
                managePage('next', i, boxes.length);
                break;
            }
        }
    }

    // setInterval(function() {
    //     sliderAutomated();
    // }, 5000);

    

  return (
    <div>
        <h2 class="recos-title">What some cool people say about me!</h2>

        <div class="container">
            <div class="binderleft">
            </div>
            <div class="box show">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                    <img src={Vijay} alt="Vijay Bulusu"/>
                    <p><em>I worked with Aakriti during her internship at Salesforce in Summer '23. Aakriti is outstanding. She completed her internship project well before the deadline, took on a second project and completed that too without compromising on code quality. She was very independent and was able to make progress even when the requirements were unclear and evolving. She would be an asset on any team.
                        <br></br>
                    <span class="attrib">- Vijay Bulusu</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                    <img src={Rahul} alt="Rahul Aggarwal"/>
                    <p><em>Aakriti is very bright and eager to learn new skills. During her internship at Salesforce, I mentored her for a competition where she and her team had to prepare a pitch for a new product at Salesforce. She takes feedback seriously and applies it diligently to make improvements. Working in a team setting, she also demonstrated great leadership and communication skills. She and her team put together a very compelling pitch which won them the top price at the competition.
                        <br></br>
                    <span class="attrib">- Rahul Aggarwal</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                    <img src={Parvesh} alt="Parvesh Garg"/>
                    <p><em>Aakriti joined the personalization team at Walmart as an intern and soon it was easy to forget her lack of experience. Her tendency to learn a new concept or technology is astronomical. She is neither void of ideas nor shy of expressing them.

                    I worked closely with her on a complex research project that she had no trouble owning end to end. She is an asset that is hard to find. One of the smartest engineers I have worked with. <br></br>
                    <span class="attrib">- Parvesh Garg</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Sowmya} alt="Sowmya Dayananda"/>
                    <p><em>I've worked with Aakriti since her internship with Walmart and during this journey, I've seen her quickly picking up newer and complex technologies. She has a growth mindset and a work ethic to match. She was instrumental in several initiatives and can independently drive complex projects to completion. She is confident and learns from feedback which helps her grow faster. Aakriti's ability to handle multiple technologies/tasks was unlike any I've seen before and helped increase the productivity of our team. Aakriti is an asset to any team/company and I wish her the very best !<br></br>
                    <span class="attrib">- Sowmya Dayananda</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div> 
            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Suman} alt="Suman Kumar"/>
                    <p><em>Aakriti has been a star performer throughout her career at Walmart.She takes up the complete ownership of any work assigned to her and finishes them on time with good quality.Its been a great experience working with her. She will be a great asset to any team.<br></br>
                    <span class="attrib">- Suman Kumar</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>
            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Pooja} alt="Pooja Khatua"/>
                    <p><em>I worked with Aakriti as a partner team colleague. She is an excellent collaborator and immense joy to be around. In addition to her regular professional activities, she is an articulate communicator and adeptly ensures that everyone is on the same page. She goes an extra mile to help others and is a great team-player. I feel delighted to offer this endorsement for Aakriti.<br></br>
                    <span class="attrib">- Pooja Khatua</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>

            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Shirpaa} alt="Shirpaa Manahoran"/>
                    <p><em>Aakriti is an excellent performer on the team that I managed which was observed across a spectrum of projects. Her strongest strengths are that she is extremely quick to hit the ground running and her persistence. Her curiosity backed with technical knowledge and admirable communication skills usually give a diverse perspective to engineering as well as product discussions. She has a go-getter attitude and is well respected by the other team members. She is also active across horizontal initiatives like Campus Ambassador programs, instructing tech courses at Walmart, etc. I would highly recommend Aakriti's skills to any team, I am positive she will be a great asset to the team!<br></br>
                    <span class="attrib">- Shirpaa Manahoran</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>

            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Kritika} alt="Kritika Ghatia"/>
                    <p><em>Aakriti is a self starter. She loves taking up challenges and shows perseverance and grit to deliver high quality results. This was well displayed during her tenures as a part of Personalization team at Walmart. She is technically sound and goal oriented. I recommend her for anything challenging that comes along the way.<br></br>
                    <span class="attrib">- Kritika Ghatia</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>

            <div class="box hide">
                <div class="whitebox">
                    <i class="fas fa-arrow-left"></i>
                <img src={Swetha} alt="Swetha Neralur Ashwathnarayana"/>
                    <p><em>I have worked with Aakriti closely on multiple projects at Walmart Personalisation team. Her ownership skills and can do attitude are commendable. Her promptness, in depth technical knowledge and inquisitive nature will ensure timely delivery of great quality products. She is a great value addition to any team she joins.<br></br>
                    <span class="attrib">- Swetha Neralur Ashwathnarayana</span></em></p>
                    <i class="fas fa-arrow-right"></i>
                </div>
            </div>

            <div class="binderright">
            </div>
        </div>

    </div>
  );
}
export default LinkedInRecos;