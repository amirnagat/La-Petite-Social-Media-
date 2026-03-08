import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "אפיון ואסטרטגיה",
    desc: "נבין יחד את קהל היעד, המתחרים והמטרות העסקיות שלך.",
  },
  {
    num: "02",
    title: "קריאייטיב והפקה",
    desc: "צילום, עריכת רילס ועיצוב פוסטים שמושכים את העין.",
  },
  {
    num: "03",
    title: "ניהול ותוצאות",
    desc: "העלאה שוטפת ומעקב אחרי נתונים .",
  },
];

const Workflow = () => (
  <section className="py-24">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        תהליך העבודה שלנו
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <span className="text-6xl font-black text-accent">{step.num}</span>
            <h3 className="text-xl font-bold mt-4 mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Workflow;
