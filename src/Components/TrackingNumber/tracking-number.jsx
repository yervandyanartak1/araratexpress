import React from "react";
import styles from "./tracking-number.module.css";
import { withTranslation } from "react-i18next";
import TrackingNumberHeader from "../TrackingNumberHeader/tracking-number-header";
import TrackingNumberContent from "../TrackingNumberContent/tracking-number-content"

const TrackingNumber = () => {
  
  return (
    <div className={styles.trackingNumber}> 
      <TrackingNumberHeader />
      <TrackingNumberContent />
    
    </div>
  )
};

export default withTranslation()(TrackingNumber);
