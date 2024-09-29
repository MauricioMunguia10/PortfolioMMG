"use client";
import styles from "./navBar.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const NavBar = () => {
  const [title, setTitle] = useState("MMG");
  const pathName = usePathname();
  const router = useRouter();
  const handleHome = () => {
    if (pathName !== "/") {
      router.push("/");
    }
  };
  const handleMouseEnter = () => {
    if (pathName !== "/") {
      setTitle("Go Home");
    }
  };
  const handleMouseLeave = () => {
    if (pathName !== "/") {
      setTitle("MMG");
    }
  };
  return (
    <div className={styles.container}>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleHome}
      >
        <Image
          src="/MMG-noBackground.png"
          width={500}
          height={500}
          alt="Logo"
          className={styles.imagenLogo}
        ></Image>
        <p className={styles.title}>{title}</p>
      </div>
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
