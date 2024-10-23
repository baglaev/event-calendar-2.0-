import styles from './styles.module.scss';
import { LoginButton } from '@/features/auth';
import Image from 'next/image';
import logoRC from '@/shared/assets/images/logo-rc.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__leftСolumn}>
        <div className={styles.header__logo}>
          <Image src={logoRC} alt="логотип Red Collar" className={styles.header__logoImg} />
          red collar
        </div>
        <h1 className={styles.header__title}>
          planner
          <span className={styles.header__span}> event</span>
        </h1>
      </div>
      <div className={styles.header__rightColumn}>
        <div className={styles.header__calendarButtons}>
          <p className={styles.header__calendarMonth}>октябрь</p>
          <button className={styles.header__calendarButton}></button>
          <button
            className={`${styles.header__calendarButton} ${styles.header__calendarButton_buttonNext}`}></button>
        </div>
        <LoginButton />
      </div>
    </header>
  );
}
