import { motion } from "framer-motion";
import amitPhoto from "@/assets/amit-dasa.jpg";

const AboutMe = () => (
  <section id="about" className="py-20 md:py-28 bg-secondary">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl">
            <img
              src={amitPhoto}
              alt="עמית דסה – מנהל סושיאל מדיה"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-2 md:order-1 flex flex-col gap-5"
        >
          <span className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            קצת עליי
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
            נעים מאוד, אני עמית דסה
          </h2>
          <p className="text-lg md:text-xl font-semibold text-foreground/80">
            חלק מהצוות שלך, לא רק ספק חיצוני.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            השילוב בין הלימודים האקדמיים לבין העבודה בשטח מאפשר לי להביא ללקוחות שלי ערך מוסף – לא רק ניהול טכני של דפים, אלא הבנה עמוקה באסטרטגיה שיווקית, פסיכולוגיה של צרכנים ויצירת תוכן שמניע לפעולה. אני מאמינה שכל עסק צריך סיפור טוב, ואני כאן כדי לספר את הסיפור שלך בצורה הכי ויזואלית ומדויקת שיש.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutMe;
