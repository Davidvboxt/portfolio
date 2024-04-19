// STYLING
import styles from "./hero.module.css";

// ASSETS
import Image from "next/image";

export default function HeroPage() {

    return (
        <div className={styles["articleCard"] + " " + styles["w-inline-block"]}>
            <div className={styles.articleContentWrapper}>
                <h1 className={styles.white}>David van Boxtel</h1>
                <span>Front-end Developer</span>
                <Image
                    src="/foto-met-hond.png"
                    width={300}
                    height={400}
                    alt="Picture of my and my dog"
                    className={styles.profileImg}
                />
            </div >
            <div>

            </div>
        </div>
    );
}