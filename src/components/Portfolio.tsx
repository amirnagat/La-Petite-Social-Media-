import { motion } from "framer-motion";
import { useRef, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import brca1 from "@/assets/brca-1.jpeg";
import brca2 from "@/assets/brca-2.jpeg";
import brca3 from "@/assets/brca-3.jpeg";
import brca4 from "@/assets/brca-4.jpeg";
import brca5 from "@/assets/brca-5.jpeg";
import brca6 from "@/assets/brca-6.jpeg";

interface PortfolioItem {
  id: number;
  category: string;
  type: "placeholder" | "video" | "carousel";
  src?: string;
  images?: string[];
}

const items: PortfolioItem[] = [
  { id: 0, category: "Reels", type: "video", src: "/videos/portfolio-1.mp4" },
  { id: 1, category: "עיצוב פיד", type: "video", src: "/videos/portfolio-2.mp4" },
  { id: 2, category: "אסטרטגיה", type: "carousel", images: [brca1, brca2, brca3, brca4, brca5, brca6] },
];

const PortfolioVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.muted = false;
      video.play();
    } else {
      video.pause();
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
      muted
      loop
      playsInline
      onClick={handleClick}
    />
  );
};

const PortfolioCarousel = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 rounded-full p-1.5 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/70 hover:bg-background/90 rounded-full p-1.5 transition-colors"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Portfolio = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        עבודות נבחרות
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.id * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-square bg-secondary rounded-xl overflow-hidden cursor-pointer"
          >
            {item.type === "video" && item.src && (
              <PortfolioVideo src={item.src} />
            )}
            {item.type === "carousel" && item.images && (
              <PortfolioCarousel images={item.images} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
