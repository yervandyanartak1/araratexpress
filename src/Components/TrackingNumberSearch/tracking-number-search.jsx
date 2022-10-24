import React from "react";
import { withTranslation } from "react-i18next";
import styles from "./tracking-number-search.module.css";

const TrackingNumberSearch = ({ t }) => {
  return (
    <div className={styles.PackageEdit}>
      <div className={styles.packageTitle}>
      <h4>{t("newPackages.label")}</h4>
      </div>
      <form className={styles.packageContent}>
        <div className={styles.packageContentLeft}> 
          <input type="text" placeholder={t("packageName.label")} className={styles.packageInput}/>
          <input type="text" placeholder={t("packageWeight.label")} className={styles.packageInput}/>
          <input type="date"  className={styles.packageInput}/>
          <textarea name="" placeholder={t("clientNotes.label")} id="" cols="30" rows="10" className={styles.packageText}></textarea>
        </div>
        <div className={styles.packageContentRight}>
          <input type="text" placeholder={t("packageDeliveryType.label")} className={styles.packageInput}/>
          <input type="text" placeholder={t("packageDeliveryStatus.label")} className={styles.packageInput}/>
          <input type="text" placeholder={t("packageDeliveryUser.label")} className={styles.packageInput}/>
          <textarea name="" placeholder={t("commentsForSys.label")} id="" cols="30" rows="10" className={styles.packageText}></textarea>

          <div className={styles.saveBtn}>
        <button>{t("packageEditSave.label")}</button>
      </div>

        </div>
      </form>
  
    </div>
    
  );    
};

export default withTranslation()(TrackingNumberSearch);
