import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./paid-popup.module.css";

const PaidPopUp = ({ t, price, onAction }) => {
  const onPayClick = (event) => {
    event.preventDefault();
    onAction();
  }

  return (
    <div className={styles.PaidPopUp}>
      <div  className={styles.shippingCost}>
        <div className={styles.shipingpCostContainer}>
          <div className={styles.shippingCostText}>
             {t("shippingCostaPay.label")} {price} $
          </div>
          <div clssName={styles.shippingCostBtnContainer}>
            <button onClick={(event) => onPayClick(event)} className={styles.shippingCostBtn} >{t("shippingCostaPayBtn.label")}</button>
          </div>
        </div>
      </div>
    
    </div>
    
  );    
};

export default withTranslation()(PaidPopUp);
