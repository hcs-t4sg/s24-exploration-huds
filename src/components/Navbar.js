import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavContent}>
        <Link href="/entrees" className={styles.navItem}>Entrées</Link>
        <Link href="/sides" className={styles.navItem}>Sides</Link>
        <Link href="/veg-vegan" className={styles.navItem}>Veg./Vegan</Link>
        <Link href="/halal" className={styles.navItem}>Halal</Link>
        <Link href="/dessert" className={styles.navItem}>Dessert</Link>
        <Link href="/salad" className={styles.navItem}>Salad</Link>
        <Link href="/fruit" className={styles.navItem}>Fruit</Link>
      </div>
    </div>
  );
}
