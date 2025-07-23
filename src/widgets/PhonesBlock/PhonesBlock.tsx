import React from 'react';
import styles from './PhonesBlock.module.css';
import OnePhoneImg from '../../shared/assets/imgs/photos/1phone.png';
import TwoPhonesImg from '../../shared/assets/imgs/photos/2phones.png';
import DeliveryPhoneImg from '../../shared/assets/imgs/photos/DeliveryPhone.png';
import PurplePhoneImg from '../../shared/assets/imgs/photos/PurplePhone.png';
import ShopListPhonesImg from '../../shared/assets/imgs/photos/ShopListPhones.png';
import UnitapPhoneImg from '../../shared/assets/imgs/photos/UnitapPhone.png';

const PhonesBlock: React.FC = () => {
  return (
    <section className={styles.appBlockSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>С приложением бизнес развивается еще быстрее</h2>
        <p className={styles.subtitle}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</p>
      </div>
      <div className={styles.phonesBlockTop}>
        <div className={styles.phoneCol}>
          <img src={TwoPhonesImg} alt="Два телефона" className={styles.phoneImgLeft} />
          <div className={styles.titleTextLeft}>Рассчитывайте доходы и расходы</div>
          <div className={styles.subtitleTextLeft}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
        </div>
        <div className={styles.phoneCol}>
          <img src={OnePhoneImg} alt="Один телефон" className={styles.phoneImgRight} />
          <div className={styles.titleTextRight}>Рассчитывайте доходы и расходы</div>
          <div className={styles.subtitleTextRight}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
        </div>
      </div>
      <div className={styles.phonesMainSplit}>
        <div className={styles.phonesLeftGrid}>
          <div className={styles.phonesLeftTopRow}>
            <div className={styles.phoneGridCol}>
              <img src={PurplePhoneImg} alt="Фиолетовый телефон" className={styles.phoneImgPurple} />
              <div className={styles.titleTextRight}>Рассчитывайте доходы и расходы</div>
              <div className={styles.subtitleTextRight}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
            </div>
            <div className={styles.phoneGridCol}>
              <img src={DeliveryPhoneImg} alt="Доставка" className={styles.phoneImgDelivery} />
              <div className={styles.titleTextRight}>Рассчитывайте доходы и расходы</div>
              <div className={styles.subtitleTextRight}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
            </div>
          </div>
          <div className={styles.phonesLeftBottomRow}>
            <img src={UnitapPhoneImg} alt="Юнитап" className={styles.phoneImgUnitap} />
            <div className={styles.titleTextLeft}>Рассчитывайте доходы и расходы</div>
            <div className={styles.subtitleTextLeft}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
          </div>
        </div>
        <div className={styles.phonesRightTall}>
          <img src={ShopListPhonesImg} alt="Список магазинов" className={styles.phoneImgShop} />
          <div className={styles.titleTextRight}>Рассчитывайте доходы и расходы</div>
          <div className={styles.subtitleTextRight}>Приобретайте подписку Плюс и улучшайте свою визитку еще лучше</div>
        </div>
      </div>
    </section>
  );
};

export default PhonesBlock; 