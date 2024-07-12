import "./Portfolio.css";
import Navbar from "./Navbar";

import oneImage from "../img/1.jpeg";
import twoImage from "../img/2.jpg";
import threeImage from "../img/3.jpg";
import sunImage from "../img/sunset.jpg";
import stitchImage from "../img/stitch.png";
import empressImage from "../img/empress.jpg";
import vaImage from "../img/va.jpg";
import kapeImage from "../img/kape.jpg";
import cgImage from "../img/cg.jpg";



const Portfolio = () => {
  return (
    <>
      <Navbar />
   
        <div className="overlay">
            <div id="portfolio-info">
              
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Portfolio Projects
                    </h1>
            </div>
          </div>
        </div>
      </div>
              <div className=" p-5">
            </div>
      <section id="portfolio">
        <div className="container">
          <div className="pb-2">
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-3"><b>Websites</b></p>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={oneImage} alt="one" class="circle-image"/>
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={twoImage} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={threeImage} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
