import React, {useEffect, useState} from "react";
import styles from "./tracking-number-content.module.css";
import { withTranslation } from "react-i18next";
import {
  useParams,
  useHistory
} from "react-router-dom";
import PaidPopUp from "../PaidPopUp/paid-popup";
import UnpaidPopup from "../UnpaidPopUp/unpaid-popup";
import Stripe from '../Payments/StripeContainer';

const TrackingNumberContent = ({t}) => {
  const history = useHistory();
  let { id } = useParams();
  const [number, setNumber] = useState('');
  const [packageData, setPackageData] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
      if (id) {
        setDisabled(true);
        setNumber(id);
        loadTrackingData(id);
      }
      return () => {}
  }, []);

  const loadTrackingData = async (trackingNumber) => {
    const url = 'https://araratexpress.com/api/package/tracking/' + trackingNumber;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.hasOwnProperty('statusCode') && data.statusCode != 200) {
        setError(t('trackingNumberInvalidError'));
      } else {
        setError('');
        setPackageData(data);
      }
      
    } catch(e) {
      setError(t('trackingNumberInvalidError'));
    }
    setDisabled(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (number) {
      setDisabled(true);
      history.push(`/tracking/${number}`);
      loadTrackingData(number);
    } else {
      setError(t('trackingNumberRequiredError'));
    }
    
  }

  const statusList = {
    1: t("status.inProgress.label"),
    2: t("status.transit.label"),
    3: t("status.pickUp.label"),
    4: t("status.undelivered.label"),
    5: t("status.notFound.label"),
    6: t("status.delivered.label")
  }

  const classList = {
    1: styles.progressLabel,
    2: styles.waitingLabel,
    3: styles.successLabel,
    4: styles.failLabel,
    5: styles.failLabel,
    6: styles.successLabel
  }
  
  const closeModal = () => {
    document.querySelector('html').style.overflow = "auto";
    setShowPayment(false);
  }

  const showPaymentModal = () => {
    document.querySelector('html').style.overflow = "hidden";
    setShowPayment(true);
    
  }
  const onSuccess = () => {
    document.querySelector('html').style.overflow = "auto";
    setShowPayment(false);
    loadTrackingData(number);
  }

  return (
    <div className={styles.trackingNumberContent}>
      {showPayment && <Stripe description={packageData.title} price={packageData.price} trackingNumber={number} onSuccess={()=>onSuccess()}  onClose={() => closeModal()} />}
      
      <div className={styles.trackingNumberWrapper}>
        <h1>{t("trackPackageText")}</h1>
        <div className={styles.packageImage}></div>
        <form className={styles.trackingContent} >
            <input type="text" onChange={event => setNumber(event.target.value)} value={number}  name="number"  className={styles.trackingInput} placeholder={t("trackingNumber.label")}/>
            <input type="submit" onClick={(e) => {onSubmit(e)}} value={t("trackingNumberSearch.label")} disabled={disabled} className={styles.trackingSearchBtn}/>
        </form>
        {error && <div className={styles.error}>{error}</div>}

        {packageData && 
         <div>
           <div>
              {packageData.paid ? <UnpaidPopup /> : <PaidPopUp onAction={()=> showPaymentModal()} price={packageData.price} />}
           </div>
            <div className={styles.packageInfo}>
            
            <div className={styles.packageInfoTitle}>{packageData.title}</div>

            <div className={styles.packageInfoStatsWrapper}>
              <div className={styles.packageInfoStats}>
                <span className={styles.packageInfoStatInfo}>{packageData.weight || 0} lb</span>
                <span className={styles.packageInfoStatLabel}>{t("weight")}</span>
              </div>
              <div className={styles.packageInfoStats}>
                <span className={styles.packageInfoStatInfo}>${packageData.price || 0}</span>
                <span className={styles.packageInfoStatLabel}>{t("price")}</span>
              </div>
              <div className={styles.packageInfoStats}>
                <span className={styles.packageInfoStatInfo}><img src={`/img/${packageData.deliveryType == 1 ?  'airplane': 'ship'}.png`} alt="" /></span>
                <span className={styles.packageInfoStatLabel}>{t("type")}</span>
              </div>
            </div>
            
            <div className={styles.packageInfoEstimatedDeliveryDate}>
              {t("estimatedDeliveryDate")} {packageData.estimatedDeliveryDate}
            </div>

            <div className={styles.packageInfoNotes}>
              {packageData.notesForClient}
            </div>

            <div className={`${styles.packageInfoStatus} ${classList[packageData.status]}`}>
              {statusList[packageData.status]}
            </div>
          </div>  
         </div>
        }
        
      </div>
    </div>
  );    
};

export default withTranslation()(TrackingNumberContent);
