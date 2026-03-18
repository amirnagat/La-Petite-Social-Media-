import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
}

const stats: StatItem[] = [
  { target: 1, suffix: "", prefix: "+", label: "שנות ניסיון" },
  { target: 20, suffix: "", prefix: "+", label: "תכנים שהופקו" },
  { target: 2, suffix: "", prefix: "+", label: "לקוחות מרוצים" },
  { target: 50, suffix: "K", prefix: "+", label: "צפיות" },
];

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
};

const AnimatedNumber = ({ item, animate }: { item: StatItem; animate: boolean }) => {
  const [current, setCurrent] = useState(0);
  const reducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!animate || hasAnimated.current) return;
    hasAnimated.current = true;

    if (reducedMotion) {
      setCurrent(item.target);
      return;
    }

    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCurrent(Math.round(eased * item.target));
      if (step >= steps) {
        setCurrent(item.target);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [animate, item.target, reducedMotion]);

  return (
    <span>
      {item.prefix}{current}{item.suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-black tracking-tight">
                <AnimatedNumber item={s} animate={isInView} />
              </div>
              <div className="mt-3 text-background/60 text-sm font-medium">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
