import React, { Suspense } from "react";
import styles from "./main.module.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Pricing from "../Pricing/pricing";
import Step from "../Step/step";
import HeroBaner from "../HeroBanner/hero-baner";
import AboutUs from "../AboutUs/about-us";
import ContactUs from "../ContactUs/contact-us";
import ServiceInfo from "../ServiceInfo/service-info";
import "../../i18n";
import SideBar from "../SideBar/side-bar";
import Calculator from "../Calculator/calculator";
import TrackingNumber from "../TrackingNumber/tracking-number";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";



const Main = () => {
  return (
    <Router>
    <Suspense fallback={null}>
      <Switch >
        <Route exact path="/">
          <div className={styles.main}>
            <Header />
            <SideBar />
            <HeroBaner />
            <Step />
            <AboutUs />
            <ServiceInfo />
            <Pricing />
            <Calculator />
            <ContactUs />

           
          </div>
        </Route>
        <Route exact path="/tracking" component={TrackingNumber}/>
        <Route exact path="/tracking/:id" component={TrackingNumber}/>
      </Switch>
      <Footer />
    </Suspense>
    </Router>
  );
};

export default Main;
