import React, { useState } from 'react';
import styles from './FAQSection.module.css';
import { ReactComponent as ArrowIcon } from '../../shared/assets/imgs/icons/Arrow.svg';

const faqs = [
  {
    question: 'Что такое UniTap Бизнес?',
    answer: 'UniTap Бизнес — это ... (заполните ответ)',
  },
  {
    question: 'Как начать пользоваться UniTap для бизнеса?',
    answer: 'Чтобы начать пользоваться UniTap для бизнеса, ...',
  },
  {
    question: 'Сколько стоит годовая подписка на UniTap Плюс?',
    answer: 'Годовая подписка стоит ...',
  },
  {
    question: 'Как оплачивать UniTap для бизнеса?',
    answer: 'Оплата производится ...',
  },
  {
    question: 'Как переехать в UniTap с другой платформы?',
    answer: 'Для переезда ...',
  },
  {
    question: 'Как подключить UniTap для бизнеса через партнёра?',
    answer: 'Для подключения через партнёра ...',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Остались вопросы?</h2>
      <p className={styles.faqSubtitle}>
        Здесь мы собрали несколько популярных вопросов и ответы на них
      </p>
      <div className={styles.faqList}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.faqItem}>
            <button className={styles.faqQuestion} onClick={() => handleToggle(idx)}>
              <span>{faq.question}</span>
              <span className={styles.faqArrow} style={{ transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                <ArrowIcon />
              </span>
            </button>
            {openIndex === idx && (
              <div className={styles.faqAnswer}>{faq.answer}</div>
            )}
            <div className={styles.faqDivider} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection; 