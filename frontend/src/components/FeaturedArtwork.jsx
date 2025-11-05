import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedArtwork() {
  const navigate = useNavigate();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedArtworks = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/paintings/featured");
        const data = await res.json();
        setArtworks(data);
      } catch (err) {
        console.error("Error fetching featured artworks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedArtworks();
  }, []);

  return (
    <section className="text-center">
      <h2 className="text-4xl md:text-4xl font-semibold mb-6 tracking-wide aboreto-font">
          <span className="inline-block border-b-2 border-white pb-1">Featured Artwork</span>
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading artworks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {artworks.map((art) => (
            <img
              key={art.id}
              src={art.image_url}
              alt={`Artwork ${art.id}`}
              className="w-full h-auto object-cover border border-green-400 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      )}

      <button
  onClick={() => navigate("/gallery")}
  className="relative px-6 py-3 border border-white rounded overflow-hidden group"
>
  <span className="relative z-10">Discover More Art</span>
  <span className="absolute inset-0 border border-white rounded opacity-0 group-hover:opacity-100 animate-borderGlow"></span>
</button>


    </section>
  );
}
