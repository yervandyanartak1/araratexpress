import React from "react";
import styles from "./about-us.module.css";
import { withTranslation } from "react-i18next";

const AboutUs = ({ t }) => {
  return (
    <div id="about" className={styles.aboutUs}>
      <div className={styles.AboutUsContainer}>
        <div className={styles.aboutUsInfo}>
          <h2 className={styles.subtitle}>{t("about-sub.label")}</h2>
          <span className={styles.span}></span>
          <p className={styles.text}>{t("about-text.label")}</p>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemImg}>
              <img src="../../../img/about-01.png" alt="" />
            </div>
            <div className={styles.aboutItemInfo}>
              <h3>{t("fast.label")}</h3>
              <p>{t("fast-text.label")}</p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <div className={styles.aboutItemImg}>
              <img src="../../../img/about-02.png" alt="" />
            </div>
            <div className={styles.aboutItemInfo}>
              <h3>{t("secured.label")}</h3>
              <p>{t("secured-text.label")}</p>
            </div>
          </div>
        </div>
        <div className={styles.aboutUsImg}>
          <img src="../../../img/about-us.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(AboutUs);
