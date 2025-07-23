import React from 'react';
import styles from './BusinessPlusBlock.module.css';
import CardsImg from '../../shared/assets/imgs/photos/Cards.png';
import PlusBadge from '../../shared/assets/imgs/icons/Plus.png';
import CardIcon from '../../shared/assets/imgs/icons/Card icon.png';
import DiagramIcon from '../../shared/assets/imgs/icons/Diagram icon.png';

const BusinessPlusBlock = () => {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.cardWrapper}>
        <div className={styles.leftSection}>
          <div className={styles.texts}>
            <h2 className={styles.title}>С Плюсом вы будете всегда в плюсе</h2>
            <p className={styles.subtitle}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</p>
          </div>
          <div className={styles.imageWrapper}>
            <img src={CardsImg} alt="Cards" className={styles.cardsImg} />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.plusFeatureCard1}>
            <img src={DiagramIcon} alt="Аналитика" className={styles.plusFeatureIcon1} />
            <span className={styles.plusFeatureText1}>Расширенная аналитика ваших электронных визиток</span>
          </div>
          <div className={styles.plusFeatureCard2}>
            <img src={CardIcon} alt="Кастомизация" className={styles.plusFeatureIcon2} />
            <span className={styles.plusFeatureText2}>Дополнительные возможности кастомизаций ваших электронных визиток</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPlusBlock; 