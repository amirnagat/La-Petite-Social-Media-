import { motion } from "framer-motion";
import { useRef, useCallback } from "react";
interface PortfolioItem {
  id: number;
  category: string;
  type: "placeholder" | "video";
  src?: string;
}

const items: PortfolioItem[] = [
  { id: 0, category: "Reels", type: "video", src: "/videos/portfolio-1.mp4" },
  { id: 1, category: "עיצוב פיד", type: "video", src: "/videos/portfolio-2.mp4" },
  { id: 2, category: "אסטרטגיה", type: "video", src: "/videos/portfolio-3.mp4" },
  { id: 3, category: "Reels", type: "placeholder" },
  { id: 4, category: "עיצוב פיד", type: "placeholder" },
  { id: 5, category: "אסטרטגיה", type: "placeholder" },
];

const PortfolioVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
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
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center pointer-events-none">
              <span className="text-primary-foreground font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.category}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
