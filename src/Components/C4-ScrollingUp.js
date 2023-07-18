import React, { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './C4-ScrollingUp.css';

function C4ScrollingUp() {
  useEffect(() => {
    $(document).ready(function() {
      $('#C4-Id-Slide1').slick({
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        asNavFor: '#C4-Slide1',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
      $('#C4-Slide1').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,
        slidesToShow: 2,
        adaptiveHeight: false,
        rightMode: true,
        centerPadding: '60px',
        focusOnSelect: true,
        asNavFor: '#C4-Id-Slide1',
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              autoplay: true,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 1024,
            settings: {
              autoplay: true,
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              autoplay: true,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });
  }, []);

  return (
    <section className="section C4-Scrolling" id="digital-1" style={{ background: "#f7f7f7" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 pt-3 text-center">
            <p className="C4-head text-dark aos-init aos-animate" data-aos="fade-down" data-aos-delay="100">Supercharge Your Business Growth!</p>
            <p className="C4-para mb-4 aos-init aos-animate" data-aos="fade-down" data-aos-delay="200"> Unlock Your Business Potential with our Cutting-Edge Web Designs! Whether you're starting a visionary venture or expanding your existing one, our unique, feature-loaded, and affordable 360° web design solutions are tailor-made for businesses of all sizes. Unleash your full potential with us today!{" "}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-12">
            <div id="C4-affect">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-5 col-12" data-aos-delay="100">
                  <div id="C4-ImgScrolling">
                    <div id="C4-Id-Slide1">
                      <div className="C4-ScrollingImg">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <img src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600" data-src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Web design for small business" className="img-fluid lazyload" />
                          </div>
                        </div>
                      </div>
                      <div className="C4-ScrollingImg">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <img src="https://images.pexels.com/photos/5833775/pexels-photo-5833775.jpeg?auto=compress&cs=tinysrgb&w=600" data-src="https://images.pexels.com/photos/5833775/pexels-photo-5833775.jpeg?auto=compress&cs=tinysrgb&w=600" alt="website design for start up" className="img-fluid lazyload" />
                          </div>
                        </div>
                      </div>
                      <div className="C4-ScrollingImg">
                        <div className="row">
                          <div className="col-lg-12 col-12">
                            <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" data-src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" alt="website development for small business" className="img-fluid lazyload" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-12" data-aos-delay="100">
                  <div className="C4-Imgout">
                    <div id="C4-Id-Imgout">
                      <div id="C4-Slide1">
                        <div className="C4-Individual-Img">
                          <div className="C4Content">
                          <p className="C4-SlideHead mb-0" style={{ fontFamily: "serif", fontSize: "30px", fontWeight: "bold !important" }}>Starting Small?</p>
                            <span className="C4-subtext"> Got a Winning Small Business Idea? Sell Online Now! If not, our web development for small businesses can help you discover the perfect path to success!</span>
                            <p className="cont3">
                            Bring us your Business Ideas, and We'll Create Stunning, Intuitive, and Affordable Solutions!{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                  {" "}
                                  Elevate Your Start-Up with Exceptional Website Design!
                                </a>{" "}
                                or Empower Your Small Business to Amplify Your Ideas Loud and Wide!{" "}</p>
                          </div>
                        </div>
                        <div className="C4-Individual-Img">
                          <div className="C4Content">
                            <p className="C4-SlideHead mb-0" style={{ fontFamily: "serif", fontSize: "30px", fontWeight: "bold !important" }}>Want to Lead Big?</p>
                            <span className="C4-subtext"> Transform Your Current Website into a High-Value Digital Asset!</span>
                            <p className="cont3"> Don't Settle for Mediocrity - Stand Out with Us! Explore our...{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                 Revolutionary Website Development Services
                                </a>{" "}
                                Unlock Your Midsize Business's Potential with Our Exceptional Solutions, Paving the Way to Become a Leading Brand.{" "}</p>
                          </div>
                        </div>
                        <div className="C4-Individual-Img">
                          <div className="C4Content">
                            <p className="C4-SlideHead mb-0" style={{ fontFamily: "serif", fontSize: "30px", fontWeight: "bold !important" }}> Embrace Limitless Possibilities!</p>
                            <span className="C4-subtext">Expand Your Digital Assets - There's Always Room for More Work!</span>
                            <p className="cont3"> Unlock Infinite Potential - Continuously Expand and Flourish with Our Premium Enterprise-Level Solutions!{" "}
                                <a
                                  href="#"
                                  style={{ color: "#1778f2" }}
                                  target="_blank"
                                >
                                  Exquisite Web Design Solutions
                                </a>{" "}
                                Embark on a Digital Identity Transformation - Get a Headstart with our Excellent Solutions.{" "}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12 text-center mt-5">
            
          </div><p className="C4Button mb-0"><a className="text-white" href="#">Work With Us</a></p>
        </div>
      </div>
    </section>
  );
}

export default C4ScrollingUp;