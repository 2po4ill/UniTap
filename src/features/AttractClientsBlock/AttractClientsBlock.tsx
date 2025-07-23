import React from 'react';
import styles from './AttractClientsBlock.module.css';
import FeatureCard from '../../shared/ui/FeatureCard';
import WBImg from '../../shared/assets/imgs/photos/WB.png';
import LaptopImg from '../../shared/assets/imgs/photos/Laptop.png';
import TBImg from '../../shared/assets/imgs/photos/TB.png';

const cards = [
  {
    image: WBImg,
    title: 'Селлер: Сервис для работы с маркетплейсами',
    description: 'Анализируйте продажи и управляйте товарами на Ozon и Wildberries',
    buttonText: 'Попробовать',
  },
  {
    image: LaptopImg,
    title: 'Конструктор сайтов',
    description: 'Сайт или интернет-магазин с приемом платежей за несколько минут',
    buttonText: 'Создать сайт',
  },
  {
    image: TBImg,
    title: 'T-ID: удобный вход на сайт и в приложение',
    description: 'Увеличивайте выручку и получайте качественные данные о пользователях',
    buttonText: 'Подключить',
  },
];

const AttractClientsBlock: React.FC = () => {
  return (
    <section className={styles.attractClientsSection}>
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
    </section>
  );
};

export default AttractClientsBlock; 