import styles from "./notifications.module.css"

export default function Notifications() {
    return (
        <div>
            <h1>Notifications</h1>

            <label htmlFor="email">Email Address:</label>
            <input type="text" id="email" name="email" minLength="2" />

            <label htmlFor="phone">Phone Number:</label>
            <input type="text" id="phone" name="phone" minLength="2" />

            <button type="button">Sign Up</button>
        </div>
    );
}
