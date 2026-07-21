'use client';
import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './PageFAQ.module.css';

interface FAQ {
  question: string;
  answer: string | React.ReactNode;
}

interface Props {
  faqs: FAQ[];
}

export default function PageFAQ({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqId = useId();

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) => currentIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const questionId = `${faqId}-question-${index}`;
        const answerId = `${faqId}-answer-${index}`;

        return (
          <div 
            key={index} 
            className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
          >
            <button 
              id={questionId}
              className={styles.question} 
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
              type="button"
            >
              <span className={styles.questionText}>{faq.question}</span>
              <ChevronDown 
                className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} 
                size={20} 
              />
            </button>
            <div 
              id={answerId}
              className={styles.answerContainer}
              style={{ maxHeight: isOpen ? '500px' : '0' }}
              aria-hidden={!isOpen}
              aria-labelledby={questionId}
              role="region"
            >
              <div className={styles.answerContent}>
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
