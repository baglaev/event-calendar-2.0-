import styles from './styles.module.scss';
import { CloseButton } from '@/shared/ui';
import cn from 'classnames';

export default function Auth() {
  return (
    <div className={cn(styles.login, styles.login_opened)}>
      <div className={styles.login__section}>
        <CloseButton />
        <h2 className={styles.login__title}>Вход</h2>
        <form className={styles.login__form} action="" noValidate>
          <label className={styles.login__labelInput} htmlFor="">
            <input type="email" name="email" className={styles.login__input} required />
            <span className={styles.login__error}></span>
          </label>
          <button className={styles.login__button}>Далее</button>
        </form>
      </div>
    </div>
  );
}
