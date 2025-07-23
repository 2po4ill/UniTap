import React from 'react';
import InfoCard from '../../shared/ui/InfoCard';
import GainsImg from '../../shared/assets/imgs/photos/Gains.png';
import VisitsImg from '../../shared/assets/imgs/photos/Visits.png';
import SmartImg from '../../shared/assets/imgs/photos/Smart.png';
import UniqueImg from '../../shared/assets/imgs/photos/Unique.png';
import styles from './BusinessInfoCards.module.css';

const cards = [
  {
    image: GainsImg,
    title: 'Визитки для вашего бизнеса',
    description: 'Приобретайте подписку Плюс и улучшайте свою визитку еще лучше',
    buttonText: 'Подробнее',
  },
  {
    image: VisitsImg,
    title: 'Рассчитывайте доходы и расходы',
    description: 'Приобретайте подписку Плюс и улучшайте свою визитку еще лучше',
    buttonText: 'Подробнее',
  },
  {
    image: SmartImg,
    title: 'Умная система',
    description: 'Приобретайте подписку Плюс и улучшайте свою визитку еще лучше',
    buttonText: 'Подробнее',
  },
  {
    image: UniqueImg,
    title: 'Уникальные возможности для вашего бизнеса',
    description: 'Приобретайте подписку Плюс и улучшайте свою визитку еще лучше',
    buttonText: 'Подробнее',
  },
];

interface BusinessInfoCardsProps {
  isLightMode?: boolean;
}

const BusinessInfoCards: React.FC<BusinessInfoCardsProps> = ({ isLightMode }) => {
  return (
    <div>
      <div className={styles.cardsHeader}>
        <h2 className={styles.cardsTitle}>Бизнес начинается с партнерства</h2>
        <p className={styles.cardsSubtitle}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</p>
      </div>
      <div className={styles.cardsGrid}>
        {cards.map((card, idx) => (
          <InfoCard
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            isLightMode={isLightMode}
          />
        ))}
      </div>
    </div>
  );
};

export default BusinessInfoCards; 