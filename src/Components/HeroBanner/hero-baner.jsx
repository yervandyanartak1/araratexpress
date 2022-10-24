import React from "react";
import styles from "./hero-baner.module.css";
import { withTranslation } from "react-i18next";

const HeroBaner = ({ t }) => {
  return (
    <div id="home" className={styles.heroBaner}>
      <div className={styles.heroBanerContainer}>
        <div className={styles.heroBanerText}>
          <h1>{t("baner-text.label")}</h1>
        </div>
        {/* <div className={styles.heroBanerBtn}>
          <a href="#pricing">{t("pricing.label")}</a>
          <a href="#contact">{t("contact.label")}</a>
        </div> */}
      </div>
    </div>
  );
};

export default withTranslation()(HeroBaner);
