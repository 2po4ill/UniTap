import React from 'react';
import styles from './Footer.module.css';
import RequestForm from '../../widgets/RequestForm/RequestForm';
import FAQSection from '../../widgets/FAQSection/FAQSection';
import FooterWidget from '../../widgets/FooterWidget/FooterWidget';

const Footer: React.FC = () => {
  return (
    <section className={styles.footerSection}>
      <RequestForm />
      <FAQSection />
      <FooterWidget />
    </section>
  );
};

export default Footer; 