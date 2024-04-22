// STYLING
import styles from "./themeSwitcher.module.css";

export default function ThemeSwitcherPAge() {

    return (
        <div className={styles.themeSwitcherCard}>
            <h2>Theme switcher</h2>
            <input type="checkbox"></input>
        </div>
    );
}