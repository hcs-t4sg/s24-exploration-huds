import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.Nav}>
      <div className={styles.NavContent}> {/* Make sure this matches your CSS module class name */}
        <p className={styles.navItem}>Sides</p>
        <p className={styles.navItem}>Veg./Vegan</p>
        <p className={styles.navItem}>Halal</p>
        <p className={styles.navItem}>Dessert</p>
        <p className={styles.navItem}>Salad</p>
        <p className={styles.navItem}>Fruit</p>
      </div>
    </div>
  );
}

