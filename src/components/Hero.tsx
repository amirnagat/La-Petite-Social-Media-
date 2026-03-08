import { motion } from "framer-motion";
import socialIcons from "@/assets/social-icons.png";

const Hero = () =>
<section className="min-h-screen flex items-center justify-center pt-16">
    <div className="container flex flex-col items-center gap-12">
      <div className="flex-1 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight"
        >
          ניהול סושיאל מבוסס
          <br />
          תוצאות לעסקים
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          אסטרטגיה, קריאייטיב והפקה שמביאים לקוחות.
        </motion.p>
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity"
        >
          בואו נדבר
        </motion.a>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={socialIcons}
          alt="אייקוני רשתות חברתיות"
          className="w-72 md:w-96 lg:w-[28rem] drop-shadow-xl"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>;


export default Hero;