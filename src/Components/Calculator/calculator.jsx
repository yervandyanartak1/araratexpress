import React, { useState } from "react";
import styles from "./calculator.module.css";
import { withTranslation } from "react-i18next";

const Calculator = ({ t }) => {
  window.addEventListener("openCalculator", () => {
    setClosed(false);
  });
  const [isClosed, setClosed] = useState(true);

  const close = () => {
    setClosed(true);
  };
  const planePrice = 4; 
  // const shipFixedPrice = 40;
  // const shipFixedWeight = 20;
  const shipPriceForLB = 2;
  const kgToLb = 2.20462; // 1 lb to kg
  // const freeMile = 10;
  // const oneMailsPrice = 1;
  const [price, setPrcie] = useState(0);
  const [error, setError] = useState("");
  const [type, setType] = useState(0);
  const [weight, setWeight] = useState();
  // const [distance, setDistance] = useState(0);
  // const [showDistanceInput, setDistanceInputVisibility] = useState(false);
  const [measurement, setMeasurement] = useState("lb");

  const calculate = () => {
    let price = 0;
    const itemWeight = measurement === "lb" ? weight : weight * kgToLb;

    switch (type) {
      case "plane":
        
        price = itemWeight * planePrice;
        break;
      case "ship":
        price = itemWeight * shipPriceForLB;
          // itemWeight <= shipFixedWeight
          //   ? shipFixedPrice
          //   : itemWeight * shipPriceForLB;

        break;
      default:
        break;
    }

    setPrcie(price.toFixed(2));

    // let error = "";
    // if (!type) error += "Please select delivery type";
    // if (!weight) error += "Please fill weight information";
    // if (!distance) error += "Please fill distance information";
    // if (error) {
    //   setError(error);
    //   return;
    // }
  };

  return (
    <div
      className={`${styles.calculatorBackground} ${
        isClosed ? styles.closeeCalculator : ""
      }`}
    >
      <div id="home" className={styles.calculator}>
        <div className={styles.errorBlock}>{error}</div>
        <div className={styles.calculatorContainer}>
          <div className={styles.calculatorTitleName}>
            {t("calculatorTitleName.label")}

            <span className={styles.closeIcon} href="#" onClick={close}>
              <img src="img/cancel.png" alt="" />
            </span>
          </div>

          <div className={styles.typeDelivery}>
            <div className={styles.typeDeliveryTitleBlock}>
              <p>{t("deliveryTitleBlock.label")} </p>
            </div>
            <div className={styles.typeDeliveryBlock}>
              <div className={styles.typeDeliveryChooseBlock}>
                <div className={styles.typeDeliveryAnswerOne}>
                  <label for="type1">
                    <img src="img/airplane.png" alt="" />
                  </label>
                  <input
                    type="radio"
                    onChange={() => setType("plane")}
                    name="type"
                    id="type1"
                  />
                </div>
                <div className={styles.typeDeliveryAnswerTwo}>
                  <label for="type2">
                    <img src="img/ship.png" alt="" />
                  </label>
                  <input
                    type="radio"
                    onChange={() => setType("ship")}
                    name="type"
                    id="type2"
                  />
                </div>
              </div>
              <div className={styles.typeDeliveryInput}>
                <input
                  type="number"
                  min="1"
                  name="weight"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  placeholder={t("deliveryWeoght.label")}
                />
                <select
                  name="measurement"
                  value={measurement}
                  onChange={(event) => setMeasurement(event.target.value)}
                >
                  <option value="lb">Lb</option>
                  <option value="kg">Kg</option>
                </select>
              </div>
            </div>
          </div>
          {/* <div className={styles.packageDistance}>
            <div className={styles.packageDistanceTitleBlock}>
              <p>{t("titleBlock.label")} </p>
            </div>
            <div className={styles.packageDistanceBlock}>
              <div className={styles.packageDistanceChooseBlock}>
                <div className={styles.packageDistanceAnswerOne}>
                  <input
                    type="radio"
                    onChange={() => setDistanceInputVisibility(false)}
                    name="distance"
                    id="distance1"
                  />
                  <label for="distance1">{t("distanceOne.label")}</label>
                </div>
                <div className={styles.packageDistanceAnswerTwo}>
                  <input
                    type="radio"
                    onChange={() => setDistanceInputVisibility(true)}
                    name="distance"
                    id="distance2"
                  />
                  <label for="distance2">{t("distanceTwo.label")}</label>
                </div>
              </div>
              <div
                className={`${styles.packageDistanceInput} ${
                  showDistanceInput ? styles.showDistanceInput : ""
                }`}
              >
                <input
                  type="number"
                  min="1"
                  value={distance}
                  onChange={(event) => setDistance(event.target.value)}
                  placeholder={t("distanceInput.label")}
                />
              </div>
            </div>
          </div> */}
          <div className={styles.calculateButtonContainer}>
            <button onClick={calculate}>{t("calculateButton.label")}</button>
          </div>
          <div className={styles.shippingCost}>
            <div className={styles.shipingCostSpan}>
              <div>{t("shippingCost.label")}</div>
              <div>$ {price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Calculator);
