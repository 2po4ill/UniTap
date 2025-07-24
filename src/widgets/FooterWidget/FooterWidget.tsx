import React from 'react';
import styles from './FooterWidget.module.css';
import UniTapLogo from '../../shared/assets/imgs/icons/UniTap.svg';
import ForBusinessLogo from '../../shared/assets/imgs/icons/ForBusiness.svg';
import UnitapGreen from '../../shared/assets/imgs/icons/UnitapGreen.png';
import UnitapDiamond from '../../shared/assets/imgs/icons/UnitapDiamond.png';
import TelegramLogo from '../../shared/assets/imgs/icons/TelegramLogo.png';
import VKLogo from '../../shared/assets/imgs/icons/VKLogo.png';
import DzenLogo from '../../shared/assets/imgs/icons/DzenLogo.png';

const FooterWidget: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerColLogo}>
          <div className={styles.logoContainer}>
            <img src={UniTapLogo} alt="UniTap logo" className={styles.logo} />
            <img src={ForBusinessLogo} alt="для бизнеса" style={{ display: 'block', height: 13, marginTop: 2, marginLeft: 2 }} />
          </div>
          <div className={styles.footerProducts}>
            <div className={styles.productItem}>
              <img src={UnitapGreen} alt="UniTap Плюс" className={styles.productIcon} /> UniTap Плюс
            </div>
            <div className={styles.productItem}>
              <img src={UnitapDiamond} alt="UniTap Бизнес" className={styles.productIcon} /> UniTap Бизнес
            </div>
          </div>
          <div className={styles.footerSocials}>
            <span>Подписывайтесь на наши каналы</span>
            <div className={styles.socialIcons}>
              <a href="#"><img src={TelegramLogo} alt="Telegram" /> Телеграм </a>
              <a href="#"><img src={VKLogo} alt="VK" /> Вконтакте </a>
              <a href="#"><img src={DzenLogo} alt="Dzen" /> Дзен </a>
            </div>
          </div>
        </div>
        <div className={styles.footerRightGrid}>
          <div className={styles.footerGridRow1}>
            <div className={styles.footerGroup}>
              <div className={styles.footerGroupTitle}>ПОДДЕРЖКА</div>
              <a href="#">Вопросы и ответы</a>
              <a href="#">Правила сайта</a>
              <a href="#">Справка</a>
              <a href="#">Активация по коду</a>
            </div>
            <div className={styles.footerGroup}>
              <div className={styles.footerGroupTitle}>ПРИОБРЕТЕНИЕ</div>
              <a href="#">Доставка и оплата</a>
              <a href="#">Где купить</a>
              <a href="#">Подарки партнерам</a>
            </div>
            <div className={styles.footerGroup}>
              <div className={styles.footerGroupTitle}>ДОПОЛНИТЕЛЬНО</div>
              <a href="#">Разработчикам</a>
              <a href="#">Пользовательское соглашение</a>
            </div>
          </div>
          <div className={styles.footerGridRow2}>
            <div className={styles.footerGroup}>
              <div className={styles.footerGroupTitle}>ПОДДЕРЖКА</div>
              <a href="#">Вопросы и ответы</a>
              <a href="#">Правила сайта</a>
              <a href="#">Справка</a>
              <a href="#">Активация по коду</a>
            </div>
            <div className={styles.footerGroup}>
              <div className={styles.footerGroupTitle}>ПРИОБРЕТЕНИЕ</div>
              <a href="#">Доставка и оплата</a>
              <a href="#">Где купить</a>
              <a href="#">Подарки партнерам</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <a href="#">Обратная связь</a>
        <a href="#">Политика конфиденциальности</a>
        <span>© 2023–2024, UniTap</span>
      </div>
    </footer>
  );
};

export default FooterWidget; 