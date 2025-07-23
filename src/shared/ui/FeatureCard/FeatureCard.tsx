import React from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className={styles.featureCard}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <button className={styles.cardButton} onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FeatureCard; 