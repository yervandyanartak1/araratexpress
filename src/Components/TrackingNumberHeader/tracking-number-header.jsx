import React, {useEffect} from "react";
import styles from "./tracking-number-header.module.css";
import Logo from "../Logo/logo";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import ReactFlagsSelect from 'react-flags-select';

const TrackingNumberHeader = ({ t }) => {
  const { i18n } = useTranslation();
  const dropdown = React.createRef();
  
  const onSelectFlag = (countryCode) => {
    i18n.changeLanguage(countryCode.toLowerCase());
  };

  useEffect(() => {
    let defaultCountry = i18n.language.toLocaleUpperCase();
    defaultCountry = defaultCountry === "EN" ? "US" : defaultCountry;
  }, [i18n]);

  return (
    <div className={styles.trackingNumberHeader}>
      <div className={styles.trackingNumberHeaderLogo}>
        <Logo />
      </div>
      <div className={styles.trackingNumberLangDrop}>
          <ReactFlagsSelect
              ref={dropdown}
              defaultCountry="US"
              placeholder="Lang"
              showSelectedLabel={false}
              onSelect={onSelectFlag}
              showOptionLabel={false}
              countries={["US", "RU", "AM"]}
            />
      </div>
      
    </div>
  );    
};

export default withTranslation()(TrackingNumberHeader);
