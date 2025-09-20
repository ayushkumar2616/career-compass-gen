import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How accurate is the psychometric assessment?",
      answer: "Our psychometric assessments are scientifically designed and validated by career counseling experts. They analyze multiple dimensions including personality traits, cognitive abilities, and interest patterns to provide 90%+ accuracy in career recommendations."
    },
    {
      question: "Is ED-GEN free to use?",
      answer: "Yes! Our basic psychometric assessment and college finder are completely free. We also offer premium counseling sessions and detailed career reports at affordable prices to support your educational journey."
    },
    {
      question: "Which languages are supported?",
      answer: "ED-GEN supports Hindi, English, and major regional languages including Telugu, Tamil, Bengali, Marathi, and Gujarati. We're continuously adding more languages to make career guidance accessible to all."
    },
    {
      question: "How do you find government colleges?",
      answer: "We maintain an updated database of 3000+ government colleges across India, including admission criteria, fee structures, placement records, and application deadlines. Our location-based search helps you find nearby options."
    },
    {
      question: "Can parents track their child's progress?",
      answer: "Absolutely! Parents get access to a dedicated dashboard where they can view assessment results, recommended career paths, application timelines, and progress tracking with their child's consent."
    },
    {
      question: "What makes ED-GEN different from other career guidance platforms?",
      answer: "ED-GEN combines AI-powered psychometric testing with human expertise, focuses specifically on government college opportunities, provides multilingual support, and offers end-to-end guidance from assessment to admission."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about ED-GEN and how we can help with your educational journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-soft hover:shadow-primary transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};