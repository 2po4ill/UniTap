import React from 'react';
import styles from './Header.module.css';
import UniTapLogo from '../../shared/assets/imgs/icons/UniTap.svg';
import ForBusinessLogo from '../../shared/assets/imgs/icons/ForBusiness.svg';
import AppLink from '../../shared/ui/AppLink/AppLink';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={UniTapLogo} alt="UniTap logo" style={{ display: 'block', height: 36 }} />
        <img src={ForBusinessLogo} alt="для бизнеса" style={{ display: 'block', height: 13, marginTop: 2 }} />
      </div>
      <nav className={styles.nav}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/products">Продукты</AppLink>
        <AppLink to="/for-business">Для бизнеса</AppLink>
        <AppLink to="/blog">Блог</AppLink>
      </nav>
      <div className={styles.right}>
        <span className={styles.search}>
          {/* Simple search icon SVG */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
            <line x1="14.4142" y1="14" x2="18" y2="17.5858" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
        <button className={styles.lang}>
          Ru
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.button}>Подключить</button>
      </div>
    </header>
  );
};

export default Header; 