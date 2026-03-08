import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Hero = () =>
<section className="min-h-screen flex items-center justify-center pt-16">
    <div className="container text-center">
      <motion.img
        src={logo}
        alt="La'petite Social Media"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="h-32 md:h-44 mx-auto mb-10 object-contain"
      />
      <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
      
        ניהול סושיאל מבוסס
        <br />
        תוצאות לעסקים
      </motion.h1>
      <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
      
        אסטרטגיה, קריאייטיב והפקה שמביאים לקוחות.
      </motion.p>
      <motion.a
      href="#contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="inline-block mt-10 bg-primary text-primary-foreground px-10 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
      
        בואו נדבר
      </motion.a>
    </div>
  </section>;


export default Hero;