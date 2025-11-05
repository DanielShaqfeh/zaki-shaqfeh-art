import React, { useState, useEffect, useRef } from "react";

const AboutText = () => {
  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.1 }
    );

    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={paragraphRef} className={`text-sm md:text-lg leading-relaxed text-gray-400 text-end transition-all duration-1000 ease-out 
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      زكي شقفه فنان ناشئ ضمن النسيج الحيوي للفن المعاصر،
      يتميز برؤيته الفريدة وإبداعه المستمر الذي ينسجم مع عوالم الفن المختلفة.
      رحلته الفنية هي استكشاف للتفاعل المعقد بين المشاعر الإنسانية والواقع المحيط، حيث يسعى من خلال أعماله إلى التعبير عن الرؤى الداخلية
      والخيالات التي تتداخل مع الحياة اليومية. تُظهر لوحاته براعة في المزج بين الألوان والتفاصيل الدقيقة،
      مما يجعل كل قطعة فنية نافذة تطل على عالم متجدد من الإبداع، ويُبرز قدرته على استحضار مشاعر المتلقي وتحفيز الفكر والتأمل العميق.
      زكي يسعى دائمًا إلى تقديم أعمال تعكس هويته الفنية وتميزه بين الفنانين المعاصرين،
      لتكون مصدر إلهام وتقدير لعشاق الفن من مختلف الثقافات والخلفيات
    </p>
  );
};

export default AboutText;
