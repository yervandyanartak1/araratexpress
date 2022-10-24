import React from "react";
import styles from "./step.module.css";
import StepItem from "../StepItem/step-item";
import { withTranslation } from "react-i18next";

const Step = ({ t }) => {
  const stepData = [
    {
      image: "step-01.png",
      step: `${t("step.label")} 01`,
      subtitle: t("step-contact.label"),
      text: t("step1-text.label"),
      button: t("pricing.label"),
      number: "01",
      type: "contact",
    },
    {
      image: "step-02.png",
      step: `${t("step.label")} 02`,
      subtitle: t("step-documnet.label"),
      text: t("step2-text.label"),
      button: t("pricing.label"),
      number: "02",
      type: "pricing",
    },
    {
      image: "step-03.png",
      step: `${t("step.label")} 03`,
      subtitle: t("step-recave.label"),
      text: t("step3-text.label"),
      button: t("pricing.label"),
      number: "03",
      type: "contact",
    },
  ];
  return (
    <div className={styles.step}>
      <div className={styles.stepContainer}>
        {stepData.map((item, index) => (
          <StepItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Step);
