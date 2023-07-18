import React, { useState, useEffect } from 'react';
import "./C2-Counterup.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const C2Counter = () => {
  const [counts, setCounts] = useState({
    count1: 10,
    count2: 0,
    count3: 10,
    count4: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => ({
        count1: prevCounts.count1 < 85 ? prevCounts.count1 + 1 : 85,
        count2: prevCounts.count2 < 55 ? prevCounts.count2 + 1 : 55,
        count3: prevCounts.count3 < 90 ? prevCounts.count3 + 1 : 90,
        count4: prevCounts.count4 < 48 ? prevCounts.count4 + 1 : 48
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section C2-Counterup" id="C2-C" >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 pt-3 pt-lg-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
            <h2 className="C2-heading text-dark" style={{ fontSize:"20px",position: "relative", color: "#044088 !important", marginBottom: "1.5em" }}>
              Let's discuss the<span className="goals"> achievements</span> <span className="results">of our clients in terms of numbers.</span>
            </h2>
            <p className="sub-cont_txt ">
              As an experienced Web Design Agency, we take immense pride in offering a suite of result-oriented web design and digital marketing solutions. Our approach is attainable, measurable, and viable, delivering outstanding performance numbers for our clients across various products and verticals.{" "}
            </p>
          </div>
          <div className="col-lg-7 aos-init aos-animate" data-aos="fade-down" data-aos-delay="150">
            <div className="row image-grid">
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="Count-Container aos-init aos-animate" data-aos="fade-down" data-aos-delay="100" id="counter">
                  <p className="cont">Elevated average page session duration</p>
                  <h4 className="Count-Container-Head">
                    <span className="count percent">{counts.count1}</span>
                    <span style={{ float: "left", display: "block" }}>%</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="Count-Container aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
                  <p className="cont">Maximized conversion rate potential upto</p>
                  <h4 className="Count-Container-Head">
                    <span className="count percent">{counts.count2}</span>
                    <span style={{ float: "left", display: "block" }}>%</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="Count-Container aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">
                  <p className="cont">Optimized website performance to the max </p>
                  <h4 className="Count-Container-Head">
                    <span className="count percent">{counts.count3}</span>
                    <span style={{ float: "left", display: "block" }}>%</span>
                  </h4>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <div className="Count-Container aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">
                  <p className="cont">Minimized website bounce rate to the fullest</p>
                  <h4 className="Count-Container-Head">
                    <span className="count percent">{counts.count4}</span>
                    <span style={{ float: "left", display: "block" }}>%</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C2Counter;