import NavBar from "@/components/navBar/navBar";
import styles from "./portfolio.module.css";
import Card from "@/components/card/card";
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.title}>Projects</div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Portfolio;
