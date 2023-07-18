import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider Component.css";

const SliderComponent  = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    customPaging: (i) => (
      <div className="box">
        <span>{i + 1}</span>
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
        <div className="content">
          <h1>Image 1</h1>
          <p>Some text about Image 1</p>
          <a href="#">Read more</a>
        </div>
      </div>
      <div>
        <video src="video.mp4" autoPlay loop muted />
        <div className="content">
          <h1>Video</h1>
          <p>Some text about the video</p>
          <a href="#">Watch now</a>
        </div>
      </div>
      <div>
        <img src="https://images.pexels.com/photos/6483582/pexels-photo-6483582.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
        <div className="content">
          <h1>Image 2</h1>
          <p>Some text about Image 2</p>
          <a href="#">Read more</a>
        </div>
      </div>
    </Slider>
  );
};

export default SliderComponent ;