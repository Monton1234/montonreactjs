import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import akoImage from "../img/ako.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <section id="carton">
        <div className=" mt-2">
          <div className="col">
            <div className="card p-5">
              <div className="row">
                <div className="col-lg-5 text">
                  <h4 className="text-black fw-bold">A Little Bit About Me</h4>
                  <p>
                  player of Mobile Legends. When I'm not immersed in my studies in Information Technology, I enjoy diving into the world of mobile gaming, particularly Mobile Legends.
                   
                  </p>
                  <h4 className="text-black fw-bold">Academic Journey</h4>
                  <p>
                  As I progressed through my studies, I delved deeper into specialized areas like cybersecurity, where I learned crucial skills in safeguarding digital infrastructures and data integrity. Exploring these topics not only enhanced my technical proficiency but also instilled in me a strong commitment to ensuring the security and reliability of digital systems.
            
                  </p>
                </div>
                <div className="col-lg-5 mb-9">
                  <center>
                    <img
                      src={akoImage}
                      alt="Profile Picture of Layca Florin"
                    />
                  </center>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="education" class="education">
        <div class="section-heading text-center mb-5">
          <br/>  <br/>
          <h1><b>Education</b></h1>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2024</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Central Philippines State University
                      </h4>
                      <p className="text-secondary">
                        Brgy. Camingawan, Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2020</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                       Kabankalan Catholic College
                      </h4>
                      <p className="text-secondary">
                       Kabankalan City Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">
                        Kabankalan National High School
                      </h4>
                      <p className="text-secondary">
                        Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center mb-3">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2014</h2>
                  </div>
                  <div class="timeline-horizontal-border">
                  </div>
                  <div class="timeline text-center">
                    <div class="timeline-content">
                      <h4 class="title">ERAMS - East</h4>
                      <p className="text-secondary">
                         Kabankalan City, Negros Occidental
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
