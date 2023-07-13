// @ts-ignore
import styles from './page.module.css'
import { Product } from '@/components/Product';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <Product name={"John Doe"}></Product>
    </main>
  );
}
