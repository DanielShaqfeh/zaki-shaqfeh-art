import { useState, useEffect, useRef } from "react";

function Achievments() {
  const achievements = [
    { text: "انتسب للاتحاد العام للفنانین التشكیلیین الفلسطینیین", year: "1970م" },
    { text: "أقام له الاتحاد معرضه الأول في قاعة جمعية الشابات المسيحية - عمان الأردن", year: "1970م" },
    { text: "أقام معرضه الشخصي الثاني بقاعة فندق اليمامة بالرياض / السعودية", year: "1971م" },
    { text: "عضو مؤسس لرابطة الفنانين التشكيليين الأردنيين", year: "1976م" },
    { text: "أقام معرضه الشخصي الثالث بقاعة المجلس الثقافي البريطاني / عمان", year: "1977م" },
    { text: "أقام معرض مشترك مع الفنان ياسر الدويك بقاعة وزارة الثقافة والشباب الأردنية عمان", year: "1979م" },
    { text: "مثل الأردن في معرض كاريكاتير العالم الثالث الذي نظمه اتحاد الصحفيين الأفريقيين القاهرة", year: "1990م" },
    { text: "عمل رسام كاريكاتير يومي في الصحف الأردنية والدولية الدستور و الشعب والرأي والمحرر الدولية والعرب العالمية", year: "1980 – 2006م" },
    { text: "شارك في معرض 7X7 الذي اقامه غاليري بنك القاهره عمان", year: "2010م" },
    { text: "صمم العديد لأغلفة الكتب ورسوم الروايات وكتب وقصص الأطفال وقدم رسومات تشكيلية وكاريكاتورية لبعض المسلسلات التلفزيونية الأردنية", year: "" },
  ];

  const containerRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    containerRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      containerRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="achievments" className="text-white text-center px-6 md:px-20 py-16" dir="rtl">
      <h2 className="text-4xl md:text-4xl font-semibold mb-10 tracking-wide aboreto-font">
        <span className="inline-block border-b-2 border-white pb-1">Achievments</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-6 text-md md:text-xl leading-relaxed text-gray-200 sans-serif-font">
        {achievements.map((item, index) => (
          <div
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            data-index={index}
            className={`flex flex-col md:flex-row justify-between items-start bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-xl transition-all duration-700
              ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            hover:bg-white/10 hover:scale-[1.02]`}
          >
            <p className="text-right flex-1 ml-2">
              <span className="font-bold text-green-500 ml-2">{index + 1}-</span>
              {item.text}
            </p>
            {item.year && (
              <span className="font-semibold text-gray-400 text-left ml-0 md:ml-4 mt-2 md:mt-0">
                {item.year}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievments;
