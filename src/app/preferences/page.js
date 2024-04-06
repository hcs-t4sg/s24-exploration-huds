import styles from "./preferences.module.css";

export default function Preferences() {
    return (
        <div className={styles.body}>
            <h1>Show Checkboxes</h1>
            <form action="/action_page.php"> 
                <input type="checkbox" id="email" name="email" className={styles.checkbox} />
                <label htmlFor="email" className={styles.input}>Email Notifications?</label><br/>
                <input type="checkbox" id="message" name="message" className={styles.checkbox}/>
                <label htmlFor="message" className={styles.input}>Message Notifications</label><br/>
                <br>
                </br>
                <input type="checkbox" id="hours" name="hours" className={styles.checkbox}/>
                <label htmlFor="hours" className={styles.input}>Dining Hours Updates?</label><br/>
                <input type="checkbox" id="closures" name="closures" className={styles.checkbox}/>
                <label htmlFor="closures" className={styles.input}>Closures Notifications?</label><br/>
                <input type="checkbox" id="specials" name="specials" className={styles.checkbox}/>
                <label htmlFor="specials" className={styles.input}>Seasonal Specials Alerts?</label><br/>
                <input type="checkbox" id="events" name="events" className={styles.checkbox} />
                <label htmlFor="events" className={styles.input}>HUDS Event Reminders?</label><br/>
                <input type="checkbox" id="daily" name="daily" className={styles.checkbox}/>
                <label htmlFor="daily" className={styles.input}>Daily Menu Highlights?</label><br/>
                <input type="checkbox" id="favorites" name="favorites" className={styles.checkbox}/>
                <label htmlFor="favorites" className={styles.input}>Favorite Dish Notifications?</label><br/>
                <input type="submit" className={styles.button}  value="Sign Up" />
            </form>
        </div>
    );
}

