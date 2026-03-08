import { motion } from "framer-motion";

const stats = [
  { value: "1M+", label: "צפיות" },
  { value: "2+", label: "לקוחות מרוצים" },
  { value: "30+", label: "תכנים שהופקו" },
  { value: "1+", label: "שנות ניסיון" },
];

const Stats = () => (
  <section className="py-24 bg-primary text-primary-foreground">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-black">{s.value}</div>
            <div className="mt-2 text-primary-foreground/70 text-sm font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
