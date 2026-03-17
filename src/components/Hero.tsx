import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container flex flex-col items-center gap-12">
        <div className="flex-1 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:text-6xl font-black leading-tight tracking-tight lg:text-9xl text-center text-7xl"
          >
            La'    Petite
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-2xl md:text-4xl lg:text-5xl font-bold tracking-widest text-muted-foreground"
          >
            SOCIAL MEDIA
          </motion.div>
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ opacity: arrowOpacity }}
            className="mt-6 flex justify-center"
          >
            <ChevronDown className="w-10 h-10 text-foreground/70 animate-[scroll-bounce_2.5s_ease-in-out_infinite] stroke-[2.5]" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex justify-center"
        />
      </div>
    </section>
  );
};

export default Hero;