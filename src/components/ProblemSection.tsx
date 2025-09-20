import { motion } from 'framer-motion';
import { AlertTriangle, GraduationCap, TrendingDown, HelpCircle } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: HelpCircle,
      title: 'Confusion After 10th/12th',
      description: 'Students struggle to choose the right stream without proper guidance'
    },
    {
      icon: GraduationCap,
      title: 'Lack of Government College Awareness',
      description: 'Missing out on quality education opportunities due to information gaps'
    },
    {
      icon: TrendingDown,
      title: 'High Dropout Rates',
      description: 'Wrong career choices lead to course changes and academic setbacks'
    },
    {
      icon: AlertTriangle,
      title: 'Limited Career Counseling',
      description: 'Inadequate professional guidance for making informed decisions'
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Education Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Millions of students face uncertainty in their educational journey. 
            ED-GEN addresses these critical challenges head-on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="feature-card text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};