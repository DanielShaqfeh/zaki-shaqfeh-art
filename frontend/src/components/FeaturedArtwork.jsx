import { useEffect, useState } from "react";

export default function FeaturedArtwork({ showAll = false, onShowAll }) {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState({});

  useEffect(() => {
    const fetchArtworks = async () => {
      setLoading(true);
      try {
        const url = showAll
          ? "http://localhost:5000/api/paintings/most-liked"
          : "http://localhost:5000/api/paintings/featured";

        const res = await fetch(url);
        const data = await res.json();
        setArtworks(data);
        setVisibleImages({});
      } catch (err) {
        console.error("Error fetching artworks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [showAll]);

  useEffect(() => {
    const observers = [];
    artworks.forEach((art) => {
      const imgRef = document.getElementById(`art-${art.id}`);
      if (!imgRef) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => ({ ...prev, [art.id]: true }));
              observer.disconnect();
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(imgRef);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [artworks]);

  return (
    <section className="text-center" id="gallery">
      <h2 className="text-2xl md:text-4xl font-semibold mb-6 tracking-wide aboreto-font">
        <span className="inline-block border-b-2 border-white pb-1">
          {showAll ? "Artworks" : "Featured Artwork"}
        </span>
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading artworks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-20 mb-10">
          {artworks.map((art) => (
            <div
              id={`art-${art.id}`}
              key={art.id}
              className={`relative overflow-hidden transition-all duration-700 ease-out transform ${
                visibleImages[art.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center justify-center">
                <img
                  src={art.image_url}
                  alt={`Artwork ${art.id}`}
                  className="w-full h-auto transition-all duration-700"
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {!showAll && (
        <button
          onClick={onShowAll}
          className="relative px-6 py-3 border border-white rounded overflow-hidden group mb-10"
        >
          <span className="relative z-10">Discover More Art</span>
          <span className="absolute inset-0 border border-white rounded opacity-0 group-hover:opacity-100 animate-borderGlow"></span>
        </button>
      )}
    </section>
  );
}
