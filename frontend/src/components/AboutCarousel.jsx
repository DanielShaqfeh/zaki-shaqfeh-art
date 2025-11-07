import React, { useState, useEffect, useRef } from "react";
import zaki01 from "../assets/images/zaki01.jpg";
import zaki02 from "../assets/images/zaki02.jpg";
import zaki03 from "../assets/images/zaki03.jpg";
import zaki04 from "../assets/images/zaki04.jpg";
import zaki05 from "../assets/images/zaki05.jpg";
import zaki06 from "../assets/images/zaki06.jpg";
import zaki07 from "../assets/images/zaki07.jpg";
import zaki08 from "../assets/images/zaki08.jpg";

const AboutCarousel = () => {
  const images = [zaki08, zaki02, zaki01, zaki05, zaki03, zaki06, zaki04, zaki07];
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
      className={`relative w-2/3 lg:w-1/3 flex-shrink-0 h-[300px] lg:h-[400px] overflow-hidden rounded-3xl 
        border border-white/20 shadow-xl group hover:shadow-2xl transition-all duration-1000
        ${imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        bg-gradient-to-tr from-white/5 via-white/10 to-white/5 backdrop-blur-sm`}
    >
      {/* Image */}
      <img
        src={images[currentImage]}
        alt="Zaki Shaqfeh"
        className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ease-in-out
          ${fade ? "opacity-100 group-hover:opacity-50" : "opacity-0"}`}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

      {/* Name Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2
          className="text-white text-2xl font-semibold sans-serif-font opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 
          transition-all duration-700"
        >
          Zaki Shaqfeh
        </h2>
      </div>
    </div>
  );
};

export default AboutCarousel;
