import React from 'react';
import styles from './InfoCard.module.css';

interface InfoCardProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  isLightMode?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ image, title, description, buttonText, onButtonClick, isLightMode }) => {
  return (
    <div className={isLightMode ? `${styles.infoCard} ${styles.infoCardLight}` : styles.infoCard}>
      <div className={styles.titleContainer}>
        <div className={styles.titleBaseline}>
          <h3 className={isLightMode ? `${styles.title} ${styles.titleLight}` : styles.title}>{title}</h3>
        </div>
      </div>
      <div className={styles.spacer21}></div>
      <p className={isLightMode ? `${styles.description} ${styles.descriptionLight}` : styles.description}>{description}</p>
      <div className={styles.imageWrapper} style={{ backgroundImage: `url(${image})` }}>
        <button className={isLightMode ? `${styles.button} ${styles.buttonLight}` : styles.button} onClick={onButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default InfoCard; 