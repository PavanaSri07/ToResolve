import React from 'react';
import './C8-Forms.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function C8Forms() {
  return (
    <div>
      <section
        className="section C8"
        id="C8"
        style={{ background: "#fff", position: "relative" }}
      >
        <div className="C8-container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-12 col-sm-4 col-xs-12 order-2">
              <div
                className="C8-form aos-init aos-animate"
                data-aos="fade-down"
              >
                <p className="C8-text text-dark mb-1">
                Let's advance your project goal to the following phase.{" "}
                </p>
                <p className="C8-Sub_Txt mb-4">
                Fill Out Your Requests and Let Us Handle the Rest!
                </p>
                <form
                  className="C8-Form"
                  id="homenewform"
                  method="post"
                >
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="email"
                        id="mail"
                        name="email"
                        placeholder="Email Id"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone no."
                        name="phone"
                        id="phone"
                        maxLength={10}
                        minLength={10}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        className="form-control"
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-4 need-website"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                      <p
                        className="C8-Button mb-0"
                        style={{ margin: "0 auto", display: "table" }}
                      >
                        <button
                          onclick="ga('send', 'event', 'Home Page Let's Take Your Project', 'Schedule Your Call');"
                          style={{
                            background:
                              "linear-gradient(to right, #0b59f0 30%, #673ab7)",
                            border: 0
                          }}
                          type="submit"
                          className="text-white"
                        >
                        Plan Your Call
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-sm-5 col-xs-12 order-3 aos-init aos-animate"
              data-aos="fade-down"
            >
              <div className="C8Img1 aos-init aos-animate" data-aos="fade-down">
                <img
                  src="https://images.pexels.com/photos/7413891/pexels-photo-7413891.jpeg?auto=compress&cs=tinysrgb&w=600"
                  data-src="https://images.pexels.com/photos/7413891/pexels-photo-7413891.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="web development agency"
                  className="img-fluid lazyload"
                />
                <ul className="C8Img aos-init aos-animate" data-aos="fade-down">
                  <p
                    className="C8-text text-white text-center aos-init aos-animate font-italic mb-4"
                    data-aos="fade-down"
                    data-aos-delay={100}
                  >
                    Engage &amp; Discover
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/6952/loss.svg"
                            data-src="https://www.svgrepo.com/show/6952/loss.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Drive More <br />
                        Traffic{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/494508/mind-smart-light-bulb.svg"
                            data-src="https://www.svgrepo.com/show/494508/mind-smart-light-bulb.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Improve the  <br />user experience{" "}
                      </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 
                    text-center">
                      <p className="cont text-white">
                        {" "}
                        <i>
                          {" "}
                          <img
                            src="https://www.svgrepo.com/show/175396/group-of-people-having-a-conversation.svg"
                            data-src="https://www.svgrepo.com/show/175396/group-of-people-having-a-conversation.svg"
                            alt="Google adwords customer service"
                            className="img-fluid lazyload"
                          />{" "}
                        </i>
                        Increase Lead 
                        <br />Conversion{" "}
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-3 col-xs-12 order-1
             aos-init aos-animate">
              <div
                className="C8-video aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay={100}
              >
                <img
                  src="https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="your-alt-text"
                  className="img-fluid"
                />
              </div>
            </div>
              </div>
        </div>
      </section>
    </div>
  );
}

export default C8Forms;
