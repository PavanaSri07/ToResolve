
import 'bootstrap/dist/css/bootstrap.min.css';
import './C7-Brands.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function MyComponent() {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease',
  //     delay: 400,
  //   });
  // }, []);

  return (
    <div>
      <section className="section C7" id="C7">
        <div className="container">
          <div className="C7row align-items-center justify-content-center">
            <div className="col-lg-10 col-sm-12 text-center">
              <p className="C7text text-dark mb-1">
              Achieving Top Rankings & Ensuring User Retention - Our Ultimate Thrive!
              </p>
              <p className="sub-cont_txt mb-4">
              When you engage with our multifaceted website designing firm...{" "}
                <a href="#" style={{ color: "#1778f2" }} target="_blank">
                  DIGITAL MARKETING AGENCY
                </a>
                , Unlock an arsenal of relevant, automated, and effective digital tools & platforms by connecting with our website designing firm. Experience the driving forces of creativity, innovation, and remarkable ROIs for your terrific brand.{" "}
              </p>
              <div
                className="C7row image-grid"
                data-aos="fade-down"
                data-aos-easing="ease"
                data-aos-delay={400}
              >
                {/* <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={100}
                >
                  <img
                    src="https://www.svgrepo.com/show/271138/bing.svg"
                    alt="bing"
                    className="img-fluid"
                  />
                </div> */}
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={300}
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={500}
                >
                  <img
                    src="https://www.svgrepo.com/show/475689/twitter-color.svg"
                    alt="twitter"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={700}
                >
                  <img
                    src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                    alt="instagram"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={900}
                >
                  <img
                    src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                    alt="facebook"
                    className="img-fluid"
                  />
                </div>
                {/* <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={1100}
                >
                  <img
                    src=""
                    alt="yahoo"
                    className="img-fluid"
                  />
                </div> */}
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={1300}
                >
                  <img
                    src="https://www.svgrepo.com/show/475700/youtube-color.svg"
                    alt="youtube"
                    className="img-fluid"
                  />
                </div>
                <div
                  className="C7brand"
                  data-aos="fade-left"
                  data-aos-delay={1500}
                >
                  <img
                    src="https://www.svgrepo.com/show/382726/linkedin-linked-in.svg"
                    alt="linkedin"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 text-center mt-5">
                <p className="C7button mb-0">
                  <a className="text-white" href="#">
                    Let's Grow
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyComponent;