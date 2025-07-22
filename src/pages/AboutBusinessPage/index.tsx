import React from 'react';
import Header from '../../widgets/Header';
import Hero from '../../widgets/Hero';
import styles from './AboutBusinessPage.module.css';
import InfoCard from '../../shared/ui/InfoCard';
import GainsImg from '../../shared/assets/imgs/photos/Gains.png';
import VisitsImg from '../../shared/assets/imgs/photos/Visits.png';
import SmartImg from '../../shared/assets/imgs/photos/Smart.png';
import UniqueImg from '../../shared/assets/imgs/photos/Unique.png';
import BusinessInfoCards from '../../widgets/BusinessInfoCards';
import BusinessConnectBlock from '../../widgets/BusinessConnectBlock';

const AboutBusinessPage = () => {
    return (
        <div className={styles.profilePage}>
            <Header />
            <Hero />
            <BusinessInfoCards />
            <BusinessConnectBlock />
            <BusinessInfoCards isLightMode={true}/>
            <div className={styles.profileHeader}>
            </div>
        </div>
    );
};

export default AboutBusinessPage; 