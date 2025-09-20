import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const stats = [
    { number: 92, suffix: '%', label: 'Students found the right fit', color: 'text-primary' },
    { number: 3000, suffix: '+', label: 'Colleges mapped', color: 'text-secondary' },
    { number: 12, suffix: '%', label: 'Higher govt. college enrollment', color: 'text-accent' },
    { number: 50000, suffix: '+', label: 'Students guided', color: 'text-primary' }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Making a Real
            <span className="gradient-text"> Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how ED-GEN is transforming educational outcomes across India.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              className="text-center group"
            >
              <motion.div
                className="feature-card group mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <AnimatedCounter 
                  target={stat.number} 
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={index * 0.2}
                  className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}
                />
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ 
  target, 
  suffix = '', 
  isInView, 
  delay = 0, 
  className 
}: {
  target: number;
  suffix: string;
  isInView: boolean;
  delay: number;
  className: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, target, delay]);

  return (
    <motion.div
      className={className}
      initial={{ scale: 0.8 }}
      animate={isInView ? { scale: 1 } : { scale: 0.8 }}
      transition={{ delay: delay + 0.5, type: "spring" }}
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
};