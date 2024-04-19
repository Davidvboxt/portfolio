// STYLING
import styles from "./github.module.css";

// GITHUB API
async function getGithub() {
    const response = await fetch('https://api.github.com/users/Davidvboxt')
    const data = await response.json()

    return data
}

export default async function GithubPage() {
    const github = await getGithub()

    return (
        <h1 className={styles.test2}>{github.name}</h1>
    );
}