import React from "react";
import styles from "./pricing-item.module.css";
import { useTranslation } from "react-i18next";

const PricingItem = (props) => {
  const { t } = useTranslation();
  return (
    <div className={styles.pricingItemContainer}>
      <div className={styles.pricingItem}>
        <div className={`${styles.price} ${styles.item}`}>
          <div>{props.item.price}</div>
          <div className={styles.key}></div>
        </div>
        <div className={styles.pricingInfoBlock}>
          {/* <div className={`${styles.productWeight} ${styles.item}`}>
            <div className={styles.key}> {t("product-weight.label")} </div>
            <div> {props.item.productWeight}</div>
          </div> */}
          <div className={`${styles.country} ${styles.item}`}>
            <div className={styles.key}> {t("country.label")} </div>
            <div>{props.item.country}</div>
          </div>
          <div className={`${styles.duration} ${styles.item}`}>
            <div className={styles.key}>{t("duration.label")}</div>
            <div>{props.item.duration}</div>
          </div>
          <div className={`${styles.delivery} ${styles.item}`}>
            <div className={styles.key}>{t("delivery-type.label")}: </div>
            <div>
              <img src={`/img/${props.item.delivery}.png`} alt="" />
            </div>
          </div>
        </div>
        <div className={`${styles.contactUs} ${styles.item}`}>
          <a href="#contact">{t("contact-pricing.label")}</a>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
