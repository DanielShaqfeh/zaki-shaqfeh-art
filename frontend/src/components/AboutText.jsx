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
      ref={paragraphRef} className={`text-sm md:text-xl leading-relaxed text-gray-400 text-end transition-all duration-1000 ease-out sans-serif-font
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <span className="text-white ml-2">زكي شقفة</span>
      فنان تشكيلي فلسطيني بارز،
      وُلد في بلدة عاقر بقضاء الرملة وتهجر مع عائلته إلى غزة إثر أحداث النكبة عام 1948.
      حصل على درجة البكالوريوس في الفنون الجميلة من جامعة القاهرة عام 1969،
      وانتقل بعدها إلى عمان حيث أصبح أحد المؤسسين الفاعلين للمشهد الفني الأردني والفلسطيني،
      وعضوًا في الاتحاد العام للفنانين التشكيليين الفلسطينيين منذ عام 1970.
      امتدت مسيرته المهنية لأكثر من أربعة عقود، شملت التدريس في المدارس السعودية والأردنية،
      بالإضافة إلى مساهماته الفنية في تصميم أغلفة الكتب ورسوم الروايات وكتب الأطفال،
      والعمل ككاريكاتيري عالمي في العديد من الصحف المحلية والدولية. تميزت أعماله بالتعبيرية والتجريب الفني،
      مع التزام واضح بالقضايا العربية والإسلامية والفلسطينية،
      معبّراً عن هموم مجتمعه ورؤاه الفنية العميقة من خلال أسلوبه المميز في الرسم والتلوين
    </p>
  );
};

export default AboutText;
