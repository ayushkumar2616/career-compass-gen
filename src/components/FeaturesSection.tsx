import { motion } from 'framer-motion';
import { 
  Brain, 
  UserCheck, 
  Route, 
  MapPin, 
  Trophy, 
  Globe 
} from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Psychometric Assessment',
      description: 'AI-powered personality and aptitude tests to discover your true potential and interests',
      color: 'from-primary to-primary-glow'
    },
    {
      icon: UserCheck,
      title: 'Personalized Counselling',
      description: 'One-on-one sessions with certified career counselors tailored to your profile',
      color: 'from-secondary to-secondary-glow'
    },
    {
      icon: Route,
      title: 'Course → Career Mapping',
      description: 'Clear roadmaps showing how different courses lead to specific career opportunities',
      color: 'from-accent to-accent-glow'
    },
    {
      icon: MapPin,
      title: 'Nearby Govt Colleges Directory',
      description: 'Comprehensive database of government colleges with admission requirements and deadlines',
      color: 'from-primary to-secondary'
    },
    {
      icon: Trophy,
      title: 'Scholarships & Timeline Tracker',
      description: 'Stay updated on scholarship opportunities and never miss important application deadlines',
      color: 'from-secondary to-accent'
    },
    {
      icon: Globe,
      title: 'Multilingual Support',
      description: 'Access guidance in your preferred language - Hindi, English, and regional languages',
      color: 'from-accent to-primary'
    }
  ];

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything You Need for Your
            <span className="gradient-text"> Educational Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and expert guidance to help you make informed decisions about your future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="feature-card group"
              >
                <div className="mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <motion.div
                  className="h-1 bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index * 0.1) + 0.5, duration: 0.8 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};