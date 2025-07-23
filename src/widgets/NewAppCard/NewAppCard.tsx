import React from 'react';
import styles from './NewAppCard.module.css';
import iPhoneImg from '../../shared/assets/imgs/photos/iPhone.png';
import CardLogo from '../../shared/assets/imgs/icons/UniTapLogoCard.png';
import AppStoreIcon from '../../shared/assets/imgs/icons/AppStore.png';
import GooglePlayIcon from '../../shared/assets/imgs/icons/GooglePlay.png';
import AppGalleryIcon from '../../shared/assets/imgs/icons/AppGallery.png';
import RuStoreIcon from '../../shared/assets/imgs/icons/RuStore.png';

const NewAppCard: React.FC = () => {
  return (
    <div className={styles.newAppCardWrapper}>
      <div className={styles.leftSection}>
        <img src={CardLogo} alt="UniTap Logo" className={styles.cardLogo} />
        <h2 className={styles.title}>Попробуйте приложение прямо сейчас</h2>
        <div className={styles.storesRow}>
          <img src={AppStoreIcon} alt="App Store" className={styles.storeIcon} />
          <img src={GooglePlayIcon} alt="Google Play" className={styles.storeIcon} />
          <img src={AppGalleryIcon} alt="AppGallery" className={styles.storeIcon} />
          <img src={RuStoreIcon} alt="RuStore" className={styles.storeIcon} />
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={iPhoneImg} alt="iPhone" className={styles.iphoneImg} />
      </div>
    </div>
  );
};

export default NewAppCard; 