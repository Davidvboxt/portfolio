// STYLING
import styles from "./intro.module.css";

export default function IntroPage() {

    return (
        <div className={styles.introCard}>
            <h2>Hallo 👋</h2>
            <div>Mijn naam is David en ik ben een front-end developer dat gespecialiseerd is in het realiseren en bouwen van applicaties voor mobiele applicaties en desktop platforms.</div>
        </div>
    );
}