import { motion } from "framer-motion";
import { Target, Video, PenTool } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "אסטרטגיה ותוכנית תוכן",
    desc: "בניית תוכנית תוכן מותאמת אישית שמבוססת על מחקר שוק, ניתוח מתחרים ומיפוי קהל יעד.",
  },
  {
    icon: Video,
    title: "הפקת Reels וצילום קריאייטיב",
    desc: "צילום מקצועי, עריכת וידאו ועיצוב תוכן ויזואלי שמושך תשומת לב ומייצר מעורבות.",
  },
  {
    icon: PenTool,
    title: "ניהול שוטף וכתיבת תוכן",
    desc: "כתיבת קופי שמוכר, העלאת תוכן שוטף ותחזוקת נוכחות דיגיטלית עקבית ומקצועית.",
  },
];

const Services = () => (
  <section className="py-24 bg-secondary">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >
        השירותים שלנו
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-xl p-8 hover:shadow-lg transition-shadow"
          >
            <s.icon className="w-10 h-10 mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
