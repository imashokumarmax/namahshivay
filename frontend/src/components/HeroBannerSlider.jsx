import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { heroBannerSlides } from '../data/tiss-info';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all group"
  >
    <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all group"
  >
    <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
  </button>
);

export const HeroBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div className="absolute bottom-8">
        <ul className="flex space-x-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 rounded-full hover:bg-white transition-all cursor-pointer hover:scale-125" />
    )
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <Slider {...settings}>
        {heroBannerSlides.map((slide) => (
          <div key={slide.id} className="relative h-[600px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.4)'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-transparent" />

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl space-y-6 animate-fadeIn">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-300/30 rounded-full text-blue-100 text-sm font-semibold">
                    {slide.subtitle}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  {slide.title}
                </h1>
                
                <p className="text-xl text-gray-200 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                    onClick={() => window.location.href = slide.link}
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg backdrop-blur-sm"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Technology Tags Floating */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 hidden lg:flex space-x-4 z-10">
        {['IBM Maximo', 'MAS', 'IT Infrastructure', 'IoT', 'Cognos'].map((tech, idx) => (
          <div
            key={idx}
            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all cursor-pointer"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};
