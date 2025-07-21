import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../shared/assets/imgs/photos/Hero.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>
        Бизнес начинается<br />с партнерства
      </h1>
      <div className={styles.heroContent}>
        <p className={styles.subtitle}>
          <span className={styles.subtitleLine}>Digital визитки - будущее для цифрового</span><br />бизнеса и ваших идей
        </p>
        <button className={styles.button}>
          Быть в бизнесе
        </button>
      </div>
      <img src={HeroImage} alt="Decorative hero" className={styles.heroImage} />
    </div>
  );
};

export default Hero; 