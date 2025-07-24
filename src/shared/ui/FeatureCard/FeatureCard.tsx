import React from 'react';
import styles from './FeatureCard.module.css';
import { parseBrToJsx } from '../../assets/consts/parseBrToJsx';

interface FeatureCardProps {
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardContent}>
        
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.imageButtonWrapper}>
        <img src={image} alt={typeof title === 'string' ? title : ''} className={styles.cardImage} />
        <button className={styles.cardButton} onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default FeatureCard; 