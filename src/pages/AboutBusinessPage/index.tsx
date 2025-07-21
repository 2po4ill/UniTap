import React from 'react';
import Header from '../../widgets/Header';
import Hero from '../../widgets/Hero';
import styles from './AboutBusinessPage.module.css';

const AboutBusinessPage = () => {
    return (
        <div className={styles.profilePage}>
            <Header />
            <Hero />
            <div className={styles.profileHeader}>
            </div>
        </div>
    );
};

export default AboutBusinessPage; 