import React from 'react';
import FeatureCard from '../../shared/ui/FeatureCard';
import WBImg from '../../shared/assets/imgs/photos/WB.png';
import LaptopImg from '../../shared/assets/imgs/photos/Laptop.png';
import TBImg from '../../shared/assets/imgs/photos/TB.png';
import styles from './AttractClientsWidget.module.css';

const cards = [
  {
    image: WBImg,
    title: (
      <>
        Селлер: Сервис<br />для работы с маркетплейсами
      </>
    ),
    description: (
      <p className={styles.cardDescription}>
        Анализируйте продажи и управляйте<br />товарами на Ozon и Wildberries
      </p>
    ),
    buttonText: 'Попробовать',
  },
  {
    image: LaptopImg,
    title: (
      <>
        Конструктор сайтов
      </>
    ),
    description: (
      <p className={styles.cardDescription}>
        Сайт или интернет-магазин<br />с приемом платежей за несколько минут
      </p>
    ),
    buttonText: 'Создать сайт',
  },
  {
    image: TBImg,
    title: (
      <>
        T-ID: удобный вход<br />на сайт и в приложение
      </>
    ),
    description: (
      <p className={styles.cardDescription}>
        Увеличивайте выручку и получайте<br />качественные данные<br />о пользователях
      </p>
    ),
    buttonText: 'Подключить',
  },
];

export const AttractClientsWidget: React.FC = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Привлекайте новых клиентов</h2>
      <div className={styles.cardsRow}>
        {cards.map((card, idx) => (
          <FeatureCard
            key={idx}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </>
  );
}; 