import React from 'react';
import styles from './BusinessConnectBlock.module.css';
import BusinessFeatureCard from '../../shared/ui/BusinessFeatureCard';
import { BusinessConnectCard } from '../BusinessConnectCard';
import AfishaIcon from '../../shared/assets/imgs/icons/Afisha.png';
import MenuIcon from '../../shared/assets/imgs/icons/Menu.png';
import EnterpriseIcon from '../../shared/assets/imgs/icons/Enterprise.png';
import CatalogIcon from '../../shared/assets/imgs/icons/Catalog.png';
import PlusIcon from '../../shared/assets/imgs/icons/Plus.png';
import StatisticsIcon from '../../shared/assets/imgs/icons/Statistics.png';

const features = [
  { image: AfishaIcon, title: 'Афиша', description: 'Подключайте билетную систему' },
  { image: MenuIcon, title: 'Меню', description: 'Подключайте билетную систему' },
  { image: EnterpriseIcon, title: 'Энтерпрайз', description: 'Подключайте билетную систему' },
  { image: CatalogIcon, title: 'Каталог', description: 'Подключайте билетную систему' },
  { image: PlusIcon, title: 'Плюс для всех', description: 'Подключайте билетную систему' },
  { image: StatisticsIcon, title: 'Статистика', description: 'Подключайте билетную систему' },
];

const BusinessConnectBlock: React.FC = () => {
  return (
    <div className={styles.connectBlockWrapper}>
      <BusinessConnectCard />
      <div className={styles.featuresRow}>
        {features.map((f, i) => (
          <BusinessFeatureCard key={i} image={f.image} title={f.title} description={f.description} />
        ))}
      </div>
    </div>
  );
};

export default BusinessConnectBlock; 