import React from "react";
import styles from "./header.module.css";
import Navbar from "../Navbar/navbar";
import Logo from "../Logo/logo";

const Header = () => {
  const open = () => {
    const event = new CustomEvent("openMenu", {});
    window.dispatchEvent(event);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div onClick={open} className={`${styles.sideBarMenu}`}>
          <button onClick={open} className={styles.menuButton}>
            <img src="/img/menu.png" alt="" />
          </button>
        </div>
        <Logo />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
