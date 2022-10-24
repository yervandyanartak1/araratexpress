import React from "react";
import styles from "./service-info.module.css";
import { withTranslation } from "react-i18next";

const ServiceInfo = ({ t }) => {
  return (
    <div className={styles.delivery}>
      <div className={styles.deliveryTitle}>
        <h2>{t("service.label")}</h2>
        <span></span>
      </div>
      <div className={styles.deliveriInfo}>
        <img src="img/take.png" alt="" />
        <p>{t("service-info.label")}</p>
      </div>
      <div className={styles.deliveriInfo}>
        <img src="img/get.png" alt="" />
        <p>{t("delivery-info.label")}</p>
      </div>
    </div>
  );
};

export default withTranslation()(ServiceInfo);
