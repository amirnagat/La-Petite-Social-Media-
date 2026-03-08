import { motion } from "framer-motion";

const categories = ["Reels", "עיצוב פיד", "אסטרטגיה"];

const items = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  category: categories[i % 3],
}));

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
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
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
