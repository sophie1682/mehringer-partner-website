import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import LeistungenSection from "./Sections/LeistungenSection.js";
import FloatingButton from "components/CustomFab/CustomFab.js";
import CookieConsent from "components/CustomSnackbar/CustomSnackbar.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Leistungen(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("assets/img/bg-header.png")}
        style={{ height: "25vh" }}
      ></Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <LeistungenSection />
        </div>
        <FloatingButton />
        <CookieConsent />
      </div>
      <Footer />
    </div>
  );
}
