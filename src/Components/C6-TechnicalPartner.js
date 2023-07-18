import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './C6-TechnicalPartner.css';
const AboutBanner = () => {
    return (
      <section id="C6-Tech" className="section">
        <div className="container">
          
          <div className="row align-items-center justify-content-start">
           
            <div className="row align-items-center justify-content-start">
              <div className="col-lg-6 col-12">
                <h1 className="C6-Head text-dark aos-init">TECHNICAL <span style={{ color: "#d33536" }}>PARTNER</span></h1>
                <p className="C6-Matter">
                {" "}
                  MK DigitalMare stands as the premier digital marketing, web development, and web designing company in Hyderabad. Additionally, we proudly serve as a global software provider, delivering tailor-made solutions for web, mobile, digital, cloud, and desktop software development and consulting services to clients across diverse industries.
                  <br />
                  <br /> Years ago, we embarked on a journey to revolutionize businesses online through our digital marketing, web designing, web applications, and Android apps services. Catering to all industries and companies in Hyderabad, India, we have successfully delivered numerous web designing and application projects, along with exceptional digital marketing and email marketing services. Our commitment to satisfying our clients' goals has enabled us to evolve into a leading web development, web designing, and digital marketing company in Hyderabad.{" "}
                </p>
                <p className="C6Button mb-0">
                  <a className="text-white" href="http://mkdigitalmare.com/" target="_blank" rel="noopener noreferrer">Let’s Hear Your Idea</a>
                </p>
              </div>
              <div className="col-lg-3 col-12">
                <img src="https://media.licdn.com/dms/image/C4D0BAQGFWIakSb16aw/company-logo_200_200/0/1647625542412?e=2147483647&v=beta&t=vgAnWpCWw37jx91Dru51qx_N7wKzon0Diq_eOO50YIQ" alt="aboutban1" className="img-fluid aboutbannerImg2 lazyload" />
              </div>
              <div className="col-lg-3 col-12 pl-0">
                <div className="C6-Video">
                  <div className="video-wrapper">
                    <video poster="" id="myVideo4" loop autoPlay muted>
                      <source src="https://player.vimeo.com/external/373983975.sd.mp4?s=fb207dfae15ee2d5ca124e50b0aca8b3e6f0667f&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                      <source src="https://player.vimeo.com/external/373983975.sd.mp4?s=fb207dfae15ee2d5ca124e50b0aca8b3e6f0667f&profile_id=164&oauth2_token_id=57447761" type="video/webm" />
                    </video>
                    <script>
                      document.getElementById('myVideo4').play();
                    </script>
                  </div>
                  <div className="VideoCont">
                    <p className="C6-Matter font-italic text-white">We are home to a team of talented, dynamic, and highly creative transformers who relentlessly push boundaries, exploring new horizons to create your unmatched digital presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutBanner;
  