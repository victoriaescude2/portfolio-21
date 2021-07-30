import React from "react";
import Carousel, {slidesToShowPlugin} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>MIS PROYECTOS</h2>
      </div>

      <Carousel
        plugins={['arrows',
        'infinite', 'autoplay',
        {
          resolve: slidesToShowPlugin,
          options: {
           numberOfSlides: 3
          }
        },
        ]}    
        slidesPerPage={3}
        animationSpeed={500}
        offset={50}
        draggable
        
        itemWidth={300}
        slides={Slides}
        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: true,
            itemWidth: 250,
          },
        }}
      Carousel/>
    </div>
  );
};

export default Slider;