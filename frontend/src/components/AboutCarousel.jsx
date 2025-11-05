import React, { useState, useEffect, useRef } from "react";
import zaki01 from "../assets/images/zaki01.jpg";
import zaki02 from "../assets/images/zaki02.jpg";
import zaki03 from "../assets/images/zaki03.jpg";
import zaki04 from "../assets/images/zaki04.jpg";

const AboutCarousel = () => {

  const images = [
    zaki01,
    zaki02,
    zaki03,
    zaki04
  ];
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const imageRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Animate image when it appears in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={imageRef}
      className={`w-1/3 lg:w-1/3 flex-shrink-0 relative h-[300px] lg:h-[400px] overflow-hidden rounded-3xl 
        border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-1000
        ${imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        bg-gradient-to-tr from-white/5 via-white/10 to-white/5 backdrop-blur-sm`}
    >
      <img
        src={images[currentImage]}
        alt="Zaki Shaqfeh"
        className={`absolute top-0 left-0 w-full h-full object-fit transition-opacity duration-1000 ease-in-out
          ${fade ? "opacity-100 group-hover:opacity-50" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-black/10 to-black/0 pointer-events-none"></div>
    </div>
  );
};

export default AboutCarousel;
