import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavContent}>
        {/* You can pass className to the a tag directly if needed */}
        <Link href="/entrees" passHref><a className={styles.navItem}>Entrées</a></Link>
        <Link href="/sides" passHref><a className={styles.navItem}>Sides</a></Link>
        {/* ... continue with other links */}
      </div>
    </div>
  );
}
