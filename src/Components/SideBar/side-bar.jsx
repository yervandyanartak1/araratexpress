import React, { useState } from "react";
import styles from "./side-bar.module.css";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";

const SideBar = ({ t }) => {
  window.addEventListener("openMenu", () => {
    setClosed(false);
  });

  const { i18n } = useTranslation();
  const [isClosed, setClosed] = useState(true);
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  const close = () => {
    setClosed(true);
  };

  return (
    <div>
      <div
        onClick={close}
        className={`${styles.sideBar} ${isClosed ? styles.closeeSizeBar : ""}`}
      >
        <div className={styles.sideBarTitle}>
          <h2>AraratExpress</h2>
          <a href="#">
            <img src="img/cancel.png" alt="" />
          </a>
        </div>
        <div className={`${styles.sideBarBlocks} ${styles.sideBarBlocksFirst}`}>
          <a href="#home" className={styles.navLink}>
            {t("home.label")}
            <span className={styles.sideBarSpan}></span>
          </a>
        </div>
        <div className={styles.sideBarBlocks}>
          <a href="#pricing" className={styles.navLink}>
            {t("pricing.label")}
            <span className={styles.sideBarSpan}></span>
          </a>
        </div>
        <div className={styles.sideBarBlocks}>
          <a href="#about" className={styles.navLink}>
            {t("about.label")}
            <span className={styles.sideBarSpan}></span>
          </a>
        </div>
        <div className={styles.sideBarBlocks}>
          <a href="#contact" className={styles.navLink}>
            {t("contact.label")}
            <span className={styles.sideBarSpan}></span>
          </a>
        </div>

        <div className={styles.sideBarBlocks}>
          <a href="/tracking" target="_blank" className={`${styles.navLink} ${styles.trackingBtn}`}>
          {t("package-info.label")}
            <span className={styles.sideBarSpan}></span>
          </a>

        </div>

        <div className={styles.sideBarBlocks}></div>
        <div className={styles.sideBarTitleLan}>
          <h3>Languages</h3>
        </div>
        <div className={styles.sideBarBlocks}>
          <span onClick={() => changeLang("us")} className={styles.navLinkSpan}>
            English
            <span className={styles.sideBarLanSpan}>
              <img src="img/en.svg" alt="" />
            </span>
          </span>
        </div>
        <div className={styles.sideBarBlocks}>
          <span onClick={() => changeLang("am")} className={styles.navLinkSpan}>
            Հայերեն
            <span className={styles.sideBarLanSpan}>
              <img src="img/hy.svg" alt="" />
            </span>
          </span>
        </div>
        <div className={styles.sideBarBlocks}>
          <span onClick={() => changeLang("ru")} className={styles.navLinkSpan}>
            Русский
            <span className={styles.sideBarLanSpan}>
              <img src="img/ru.svg" alt="" />
            </span>
          </span>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${isClosed ? styles.closeOveray : ""}`}
        onClick={close}
      ></div>
    </div>
  );
};

export default withTranslation()(SideBar);
