import React from 'react';
import styles from './AttractClientsBlock.module.css';
import { AttractClientsWidget } from '../../widgets/AttractClientsWidget';
import { AttractClientsInfoWidget } from '../../widgets/AttractClientsBlock/AttractClientsInfoWidget';
import { BusinessConnectCard } from '../../widgets/BusinessConnectCard';

const AttractClientsBlock: React.FC = () => {
  return (
    <section className={styles.attractClientsSection}>
      <AttractClientsWidget />
      <AttractClientsInfoWidget />
      <BusinessConnectCard />
    </section>
  );
};

export default AttractClientsBlock; 