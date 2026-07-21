'use client';
import { useState } from 'react';
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
          >
            <button 
              className={styles.question} 
              onClick={() => toggleFAQ(index)}
              aria-expanded={isOpen}
            >
              <span className={styles.questionText}>{faq.question}</span>
              <ChevronDown 
                className={`${styles.icon} ${isOpen ? styles.rotated : ''}`} 
                size={20} 
              />
            </button>
            <div 
              className={styles.answerContainer}
              style={{ maxHeight: isOpen ? '500px' : '0' }}
              aria-hidden={!isOpen}
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
