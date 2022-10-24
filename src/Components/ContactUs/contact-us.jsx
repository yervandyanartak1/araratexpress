import React from "react";
import styles from "./contact-us.module.css";
import { withTranslation } from "react-i18next";

const ContactUs = ({ t }) => {
  return (
    <div id="contact" className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <div className={styles.Subtitle}>
          <h2>{t("contact.label")}</h2>
          <span></span>
        </div>
        <div className={styles.info}>
          <div className={styles.adress}>
            <div className={styles.adressContainer}>
              <div>
                <h3>{t("address.label")}</h3>
                <h4>{t("address-title-usaName.label")}</h4>
                <p>{t("address-title.label")}</p>
                <h4>{t("address-title-name.label")}</h4>
                <p>{t("address-name.label")}</p>
              </div>
              <div>
                <h3> {t("phone.label")}</h3>
                <p>+1 732 425 15 35</p>
                <p>+374 55 11 22 77</p>
              </div>
              <h3>{t("email.label")}</h3>
              <p>araratexpress@yahoo.com</p>
            </div>
          </div>
          <div className={styles.map}>
            <iframe
              title="contact us"
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12172.215156935667!2d-74.37111127547811!3d40.29676462006537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3d0d42f5996f7%3A0xed4391b480efb61!2sEnglishtown%2C%20NJ%2007726%2C%20USA!5e0!3m2!1sen!2s!4v1601663430684!5m2!1sen!2s"
              width="600"
              height="450"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(ContactUs);
