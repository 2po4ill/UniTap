import React from 'react';
import Header from '../../widgets/Header';
import styles from './AboutBusinessPage.module.css';
import BusinessBlocks from '../../features/BusinessBlocks';
import BusinessAppBlock from '../../features/BusinessAppBlock';
import AttractClientsBlock from '../../features/AttractClientsBlock/AttractClientsBlock';
import Footer from '../../features/Footer/Footer';
const AboutBusinessPage = () => {
    return (
        <div className={styles.profilePage}>
            <BusinessBlocks />
            <BusinessAppBlock />
            <AttractClientsBlock />
            <Footer />
        </div>
    );
};

export default AboutBusinessPage; 