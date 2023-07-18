import React, { useState, useEffect } from 'react';
import "./C3-Testimonials.css"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote:
        'GAMAYAS is an extraordinary team of developers and designers who excel in their capabilities and responsiveness. Their out-of-the-box thinking sets them apart as they tackled the task of redesigning our old website. Their complete overhaul solutions breathed new life into our online presence, resulting in a significantly expanded client base. We were truly impressed by their creativity and talent, making them a highly recommended choice for any project.',
      author: 'Ravi Kumar.K',
      image:
        'https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },

    {
      quote:
        'GAMAYAS delivered timely and high-quality solutions that perfectly met our needs. With a small project on our hands and a tight budget, we needed someone who could act quickly, and they exceeded our expectations. Their understanding of our business requirements resulted in an outcome that went above and beyond what we had hoped for. Moreover, their performance marketing strategy proved to be exceptionally effective, delivering excellent results within any budget constraints. We are thrilled with their services and highly recommend them for their expertise and efficiency.',
      author: 'Samba Murthy.L',
      image:
        'https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote:
        'GAMAYAS Provides excellent full-suite digital solutions. We are very happy with their unprecedented & prompt services. Their Agile development and 360-degree marketing process quickly helped us grooming our requirements, the team worked consistently on our needs while meeting our time zones, and took our suggestions to sincere consideration. Their USP is they do what’s best & not what’s easiest.',
      author: 'Sasi Kiran',
      image:
        'https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote:
        'For quite a while now, we have had the pleasure of partnering with Gamayas level-headed marketers to fulfill our brand outreach requirements. Their remarkable strategies, innovative tools, and customized landing pages have significantly boosted our conversion rates. Witnessing outstanding engagement and user retention has directly contributed to our increased profit streams. We consider ourselves fortunate to have such talented marketers on board, always ready to go beyond the norm and push the boundaries of success.',
      author: 'Krishnamoorthi',
      image:
        'https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      quote:
        'It has been a long time since we have been partnering with Gamayas’s level-headed marketers to meet our brand outreach needs. Their amazing strategies, tools, and custom landing pages have increased our conversion rates. We could see amazing engagement and user retention, which is adding to our profit streams. Lucky to rope in such talented marketers always ready to push boundaries. ',
      author: 'Prasanth Kumar',
      image:
        'https://images.pexels.com/photos/5950095/pexels-photo-5950095.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="testimonials-section">
      <div className="testimonials">
        
        <div className="testimonial">
          <div className="testimonial-image">
            <img src={testimonials[activeIndex].image} alt="Testimonial" />
          </div>
          <div className="testimonial-review">
          <h5 className="testimonials-heading">Testimonials</h5>
          <h2 className="testimonials-heading">What do our clients say</h2>
            <p className="testimonial-quote">{testimonials[activeIndex].quote}</p>
            <h6 className="testimonial-author">- {testimonials[activeIndex].author}</h6>
            <div className="dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;