import React from 'react';
import styles from './BusinessFeatureCard.module.css';

interface BusinessFeatureCardProps {
  image: string;
  title: string;
  description: string;
}

const BusinessFeatureCard: React.FC<BusinessFeatureCardProps> = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.icon} />
      <div className={styles.texts}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default BusinessFeatureCard; 