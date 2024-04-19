// COMPONENTEN
import Github from "../components/github/github";
import Hero from "../components/hero/hero";
import Intro from "../components/intro/intro";
import Skills from "../components/skills/skills";
import ProjectOne from "../components/project-one/ProjectOne";
import WorkExperience from "../components/work-experience/WorkExperience";
import ThemeSwitcher from "../components/theme-switcher/themeSwitcher";

// STYLING
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.pageGrid}>
      <Hero />
      <Intro />
      <Skills />
      <ProjectOne />
      <Github />
      <WorkExperience />
      <ThemeSwitcher />
    </main>
  );
}
