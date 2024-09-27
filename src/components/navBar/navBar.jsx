import styles from "./navBar.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>MMG ...</p>
      <button className={styles.letsTalk}>
        <p className={styles.text}>Let&apos;s Talk</p>
        <ArrowForwardIcon className={styles.arrow} />
      </button>
      <button className={styles.menu}>
        <MenuIcon />
      </button>
    </div>
  );
};

export default NavBar;
