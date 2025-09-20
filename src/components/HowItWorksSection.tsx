import { motion } from 'framer-motion';
import { ClipboardList, Target, Rocket } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: 'Take Quiz',
      description: 'Complete our comprehensive psychometric assessment to understand your personality, interests, and aptitudes.',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: Target,
      title: 'Get Personalized Plan',
      description: 'Receive a customized education and career roadmap based on your assessment results and goals.',
      color: 'from-secondary to-secondary-glow'
    },
    {
      icon: Rocket,
      title: 'Apply & Track Progress',
      description: 'Apply to recommended courses and colleges while tracking your progress with our milestone system.',
      color: 'from-accent to-accent-glow'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How ED-GEN Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your journey to the perfect career starts with three simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary to-accent transform -translate-y-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.2) + 0.5, duration: 0.5 }}
                >
                  {index + 1}
                </motion.div>

                <div className="feature-card group">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline for Mobile */}
        <div className="md:hidden mt-12">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-12 pb-12 last:pb-0"
              >
                <div className="absolute left-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};