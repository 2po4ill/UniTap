import React from 'react';
import styles from './AttractClientsInfoWidget.module.css';
import SmallDiagram from '../../shared/assets/imgs/icons/Small diagram.png';
import SmallCup from '../../shared/assets/imgs/icons/Small Cup.png';
import SmallHuman from '../../shared/assets/imgs/icons/Small human.png';

const infoCards = [
  {
    icon: SmallDiagram,
    title: '15 лет на рынке',
    description: 'Прошли путь от монолайнера до экосистемы и знаем, что нужно бизнесу. Запустили более 50 продуктов для бизнеса',
  },
  {
    icon: SmallCup,
    title: 'Системно значимый банк',
    description: 'Центробанк включил Т-Банк в список системно значимых банков, от которых зависит стабильность банковской системы России',
  },
  {
    icon: SmallHuman,
    title: '1 млн бизнес-клиентов',
    description: 'В экосистеме Т-Банка 40 млн клиентов, из них свыше 1 млн — предприниматели и компании',
  },
];

export const AttractClientsInfoWidget: React.FC = () => {
  return (
    <div>
        <h2 className={styles.sectionTitle}>Привлекайте новых клиентов</h2>
        <div className={styles.infoCardsRow}>
            
        {infoCards.map((card, idx) => (
            <div className={styles.infoCard} key={idx}>
            <img src={card.icon} alt="icon" className={styles.icon} />
            <div className={styles.title}>{card.title}</div>
            <div className={styles.description}>{card.description}</div>
            </div>
        ))}
        </div>
    </div>
  );
}; 