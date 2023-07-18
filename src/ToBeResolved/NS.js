import React from "react";
import "./N.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
function BackgroundSlider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            id="carousel-button"
            aria-current="true"
            aria-label="Slide 1"
          >
           
          </button>
          <button
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-current="true"
            id="carousel-button"
            aria-label="Slide 2"
          >
          </button>
          <button
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-current="true"
            id="carousel-button"
            aria-label="Slide 3"
          >
            
          </button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <video class="d-block w-100" autoPlay loop muted>
              <source
                src="https://player.vimeo.com/external/502952815.sd.mp4?s=8b0e02602bb0074f2560ba4cda3ad85813084168&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              ></source>
            </video>
            <div class="carousel-caption ">
              <h1> {" "}
                  The World's Foremost  Website Design
                  </h1>
              <p>
              From Concept to Code, Our Website Designing Agency Creates Powerful Websites, Blogs, and Stores that Effortlessly Market Your Products, Boost Sales, and Minimize Customer Chasing.{" "}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <video class="d-block w-100" autoPlay loop muted>
              <source
                src="https://player.vimeo.com/external/502953146.sd.mp4?s=99f66d1789e940285afd7407a5398aafe917c123&profile_id=164&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div class="carousel-caption ">
              <h1>
                  Amplify Your Website's Visibility</h1>
              <p>
              Through our digital marketing agency, embark on a strategic performance marketing roadmap to effectively promote your business to the right audience and pay only for the achieved results.{" "}
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/5833797/pexels-photo-5833797.jpeg?auto=compress&cs=tinysrgb&w=1600"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption ">
              <h1>Get an Edge as a Most{" "}</h1>
              <p>
              Even the best businesses can seem bland without branding! Our powerful branding solutions can set you apart from the crowd and ignite an everlasting connection with your audience.{" "}
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev carousel-button "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span> */}
        </button>
        <button
          class="carousel-control-next  carousel-button "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          {/* <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span> */}
        </button>
      </div>
    </>
  );
}

export default BackgroundSlider;
