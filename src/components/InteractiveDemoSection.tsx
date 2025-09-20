import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const InteractiveDemoSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: "What activities do you enjoy most in your free time?",
      options: [
        "Solving puzzles and brain teasers",
        "Creating art or music",
        "Playing sports or outdoor activities",
        "Reading and researching topics"
      ]
    },
    {
      question: "Which subject interests you the most?",
      options: [
        "Mathematics and Science",
        "Languages and Literature",
        "Social Studies and History",
        "Arts and Creative subjects"
      ]
    },
    {
      question: "What work environment appeals to you?",
      options: [
        "Working with technology and computers",
        "Collaborating with people in teams",
        "Working independently on projects",
        "Helping others solve problems"
      ]
    }
  ];

  const careerPaths = [
    {
      category: "Engineering",
      paths: ["Computer Science", "Mechanical", "Civil", "Electronics"],
      description: "Build the future with technology and innovation"
    },
    {
      category: "Medical",
      paths: ["MBBS", "Nursing", "Pharmacy", "Physiotherapy"],
      description: "Heal and help people live better lives"
    },
    {
      category: "Commerce",
      paths: ["CA", "MBA", "Banking", "Finance"],
      description: "Drive business growth and financial success"
    },
    {
      category: "Arts & Humanities",
      paths: ["Psychology", "Journalism", "Design", "Teaching"],
      description: "Express creativity and understand human nature"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...selectedAnswers, answer];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 500);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background to-muted/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience ED-GEN
            <span className="gradient-text"> Interactive Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our mini psychometric assessment and explore career paths to see how ED-GEN works.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Mini Quiz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-primary">
              <h3 className="text-2xl font-bold mb-6 text-center">Mini Psychometric Quiz</h3>
              
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">
                          Question {currentQuestion + 1} of {quizQuestions.length}
                        </span>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                            transition={{ duration: 0.5 }}
                          />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-6">
                        {quizQuestions[currentQuestion].question}
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {quizQuestions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleAnswerSelect(option)}
                          className="w-full p-4 text-left rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center justify-between">
                            <span>{option}</span>
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-4">Quiz Complete!</h4>
                    <p className="text-muted-foreground mb-6">
                      Based on your answers, we've identified potential career paths that match your interests and strengths.
                    </p>
                    <Button onClick={resetQuiz} className="btn-accent">
                      Try Again
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>

          {/* Career Path Explorer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 shadow-primary">
              <h3 className="text-2xl font-bold mb-6 text-center">Career Path Explorer</h3>
              
              <div className="space-y-6">
                {careerPaths.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="border border-border rounded-lg p-4 hover:border-primary hover:shadow-soft transition-all duration-300 cursor-pointer group"
                  >
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.category}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {category.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.paths.map((path, pathIndex) => (
                        <span
                          key={pathIndex}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                        >
                          {path}
                        </span>
                      ))}
                    </div>
                    <motion.div
                      className="flex items-center mt-3 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span>Explore pathway</span>
                      <ArrowDown className="h-4 w-4 ml-1 rotate-[-90deg]" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};