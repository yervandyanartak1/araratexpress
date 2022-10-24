import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSubtitle}>
          © 2020 AraratExpress. All Rights Reserved.
        </div>
        <div className={styles.footerLinks}></div>
      </div>
    </div>
  );
};

export default Footer;
