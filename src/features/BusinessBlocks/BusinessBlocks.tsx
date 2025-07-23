import React from 'react';
import styles from './BusinessBlocks.module.css';
import Hero from '../../widgets/Hero';
import BusinessInfoCards from '../../widgets/BusinessInfoCards';
import BusinessConnectBlock from '../../widgets/BusinessConnectBlock';
import BusinessPlusBlock from '../../widgets/BusinessPlusBlock';
import Header from '../../widgets/Header';

const BusinessBlocks: React.FC = () => {
  return (
    <div className={styles.businessBlocksWrapper}>
    <Header />
      <Hero />
      <BusinessInfoCards />
      <BusinessConnectBlock />
      <BusinessInfoCards isLightMode={true} />
      <BusinessPlusBlock />
    </div>
  );
};

export default BusinessBlocks; 