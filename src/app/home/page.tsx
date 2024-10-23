import styles from './page.module.scss';
import Header from '@/widgets/header/ui/Header';
import Auth from '@/features/auth/ui/Auth';

export default function Home() {
  return (
    <>
      <Header />
      <Auth />
    </>
  );
}
