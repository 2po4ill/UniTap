import React from 'react';
import styles from './BusinessConnectCard.module.css';
import CoinImg from '../../shared/assets/imgs/photos/Coin.png';
import BusinessBadge from '../../shared/assets/imgs/photos/Business.png';

const BusinessConnectCard: React.FC = () => {
  return (
    <div className={styles.connectCard}>
      <div className={styles.connectText}>
        <h2 className={styles.connectTitle}>А ваш бизнес уже подключен?</h2>
        <p className={styles.connectDesc}>
          Уже 30 000 000 пользователей пользуются всеми преимуществами Плюса — смотрят Кинопоиск, слушают Музыку, копят и тратят баллы Плюса <br /> и получают дополнительные возможности <br /> в сервисах Яндекса
        </p>
      </div>
      <div className={styles.connectImageWrapper}>
        <img src={CoinImg} alt="Бизнес" className={styles.connectImage} />
        <img src={BusinessBadge} alt="Бизнес бейдж" className={styles.businessBadge} />
      </div>
    </div>
  );
};

export default BusinessConnectCard; 