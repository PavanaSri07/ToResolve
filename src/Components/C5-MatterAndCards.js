import './C5-MatterAndCards.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardLayout = () => {
  return (
    <section className="Cards" id="Cards" style={{ background: "#f7f7f7 url(%20.html#) no-repeat", position: "relative", backgroundSize: "contain" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 aos-init aos-animate order1" data-aos="fade-right" data-aos-delay="100">
            <h2 className="C5txt text-dark" style={{ position: "relative" }}>Enabling Seamless Digitalization Across Industries & Boundaries! </h2>
            <p className="C5-cont_txt "> Unleash the Power of Digital with Our Website Design & Development Company - Specialists in Your Industry!{" "}</p>
            <p className="C5P mb-3">Being a top-notch web design firm, we drive online growth for businesses across diverse industries, providing end-to-end solutions from concept to completion. Our web development agency boasts time-tested expertise in every imaginable vertical, ensuring unmatched subject matter knowledge for all your needs. </p>
            <img style={{ marginTop: "20px", display: "none" }} src="https://www.svgrepo.com/show/516213/fairtiq.svg" data-src="https://www.svgrepo.com/show/516213/fairtiq.svg" className="img-fluid lazyload" alt="Gamayas" />
          </div>
          <div className="col-lg-7 order2">
            <div className="C5-Industries-whole">
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".2s">
                <div className="C5-Industries">
                  <a href="it-website-design.html">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/17017/man-with-computer-screen.svg" className="img-fluid lazyload" alt="IT website design" />
                    </div>
                    <p>IT <br />Industry</p>
                  </a>
                </div>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".4s">
                <div className="C5-Industries">
                  <a href="healthcare-website-design.html">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/339144/doctor-patient.svg" className="img-fluid lazyload" alt="Gamayas" />
                    </div>
                    <p>Healthcare <br />Industry</p>
                  </a>
                </div>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".6s">
                <div className="C5-Industries">
                  <a href="financial-services-website-design.html">
                    <div className="icon-bg">
<img src="https://www.svgrepo.com/show/419856/finance-history-money.svg" className="img-fluid lazyload" alt="Gamayas" />
                    </div>
                    <p>Finance <br />Industry</p>
                  </a>
                </div>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".8s">
                <div className="C5-Industries">
                  <a href="#">
                    <div className="icon-bg">
<img src="https://www.svgrepo.com/show/293742/law-auction.svg" className="img-fluid lazyload" alt="Law Firm website design" />
                    </div>
                    <p>Law & Order <br />Industry</p>
                  </a>
                </div>
                <a href="#">
                </a>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".10s">
                <div className="C5-Industries">
                  <a href="#">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/454143/education-learning-28.svg" className="img-fluid lazyload" alt="Education web design" />
                    </div>
                    <p>Education <br />Industry</p>
                  </a>
                </div>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".12s">
                <div className="C5-Industries">
                  <a href="#">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/518297/onshape.svg" className="img-fluid lazyload" alt="Manufacturing web development" />
                    </div>
                    <p>Manufacturing <br />Industry</p>
                  </a>
                </div>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".14s">
                <div className="C5-Industries">
                  <a href="#">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/318081/real-estate-search-house.svg" />
                    </div>
                    <p>Real Estate <br />Industry</p>
                  </a>
                </div>
                <a href="#">
                </a>
              </div>
              <div className="C5-svg aos-init aos-animate" data-aos="zoom-in" data-aos-delay=".16s">
                <div className="C5-Industries">
                  <a href="#">
                    <div className="icon-bg">
                      <img src="https://www.svgrepo.com/show/509379/maximize.svg" data-src="https://www.svgrepo.com/show/509379/maximize.svg" alt="Non Profit website design" />
                    </div>
                    <p>Non Profit <br />Industry</p>
                  </a>
                </div>
                <a href="#">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardLayout;
