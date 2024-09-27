"use client";
import NavBar from "@/components/navBar/navBar";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.principal}>
        <p>Hello! I&apos;m Mauricio.</p>
        <p className={styles.text}>
          I&apos;m a web developer passionate about creating intuitive and
          attractive digital solutions. I have experience in this field, and
          here are some of my projects.
        </p> 
      </div>
      <div
        className={styles.arrowProjects}
        onClick={() => router.push("/portfolio")}
      >
        <p>My projects</p>
      </div>
    </div>
  );
};

export default Home;
