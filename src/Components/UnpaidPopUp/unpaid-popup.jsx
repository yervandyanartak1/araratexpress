import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./unpaid-popup.module.css";

const UnaidPopUp = ({ t }) => {
  return (
    <div className={styles.PaidPopUp}>
      <div  className={styles.shippingCost}>
        <div className={styles.shipingpCostContainer}>
          <div className={styles.shippingCostText}>
          {t("shippingCostaPaid.label")}
            
          </div>
          {/* <div clssName={styles.shippingCostBtnContainer}>
            <input type="submit"  className={styles.shippingCostBtn} value={t("shippingCostaPaidBtn.label")}/>
          </div> */}
        </div>
      </div>
    
    </div>
    
  );    
};

export default withTranslation()(UnaidPopUp);
