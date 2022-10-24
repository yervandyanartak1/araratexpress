import React from "react";
import styles from "./step-item.module.css";
import { useTranslation } from "react-i18next";

const StepItem = (props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.stepItemContainer}>
      <div className={styles.stepItem}>
        <div className={styles.stepOne}>
          <div className={styles.imgBlock}>
            <img src={`img/${props.item.image}`} alt="" />
          </div>
          <div>
            <div className={`${styles.keyStep} ${styles.item}`}>
              <div> {props.item.step}</div>
            </div>
            <div className={`${styles.keySubtitle} ${styles.item}`}>
              <div>{props.item.subtitle}</div>
            </div>
          </div>
        </div>

        <div className={styles.stepTo}>
          <div className={styles.textBlock}>
            <div className={`${styles.text} ${styles.item}`}>
              <div>{props.item.text}</div>
            </div>
            <div className={`${styles.button} ${styles.item}`}>
              {props.item.type === "pricing" ? (
                <a href="#pricing">{t("pricing.label")}</a>
              ) : (
                <a href="#contact">{t("contact.label")}</a>
              )}
            </div>
          </div>

          <div className={`${styles.number} ${styles.item}`}>
            <div>{props.item.number}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepItem;
