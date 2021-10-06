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
import InfoArea from "components/InfoArea/InfoArea.js";
import AssignmentIcon from "@material-ui/icons/Assignment";
import StorageIcon from "@material-ui/icons/Storage";
import CodeIcon from "@material-ui/icons/Code";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import ShowChartIcon from "@material-ui/icons/ShowChart";

import stylesOne from "assets/jss/material-kit-react/views/landingPage.js";
import stylesTwo from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import stylesThree from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import FloatingButton from "components/CustomFab/CustomFab";
import BuildIcon from "@material-ui/icons/Build";
import CookieConsent from "components/CustomSnackbar/CustomSnackbar";

const dashboardRoutes = [];

const useStylesOne = makeStyles(stylesOne);
const useStylesTwo = makeStyles(stylesTwo);
const useStylesThree = makeStyles(stylesThree);

export default function LandingPage(props) {
  const classesOne = useStylesOne();
  const classesTwo = useStylesTwo();
  const classesThree = useStylesThree();
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
      <div className={classNames(classesOne.main, classesOne.mainRaised)}>
        <div className={classesOne.container}>
          <div className={classesTwo.section}>
            <GridContainer justify="center">
              <GridItem cs={12} sm={12} md={8}>
                <h2 className={classesTwo.title}>Software-Entwicklung</h2>
                <h4 className={classesTwo.description}>
                  Ob Web-Entwicklung, App oder individuelle Software - bei uns
                  werden maßgeschneiderte Software Lösungen entwickelt. Wir
                  haben bereits viele Projekte in unterschiedlichen Branchen
                  erfolgreich umgesetzt und freuen uns darauf, Sie optimal
                  beraten zu können.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
          <div
            className={classesThree.section}
            style={{ margin: "0 20px 0 20px" }}
          >
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Anforderungen erheben"
                    description="Um die Fähigkeiten und Eigenschaften des Software-Systems zu definieren, bedarf es der Erhebung von Anforderungen. Hierfür gehen wir systematisch vor, um das System zu spezifizeren und dessen Anforderungen zu verwalten. Dazu werden alle beteiligten Stakeholder miteinbezogen und die Anforderungen iterativ erweitert oder verbessert, um flexibel auf Änderungen reagieren zu können."
                    icon={AssignmentIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Modellierung und Entwicklung"
                    description="Nachdem die Anforderungen erhoben wurden, wird das System modelliert, um eine Blaupause des Produkts zu generieren. Dies dient auch als Dokumentation, damit Änderungen im Nachhinein kosteneffizient durchgeführt werden können. Aus den Software-Modellen wird im Anschluss das Software-Produkt entwickelt. Dafür unterstützen wir verschiedene Technologien, um eine maßgeschneiderte Lösung für Ihre Anforderungen zu finden."
                    icon={CodeIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Datenbanken"
                    description="In der Regel müssen die Daten eines Software-Systems persistiert werden. Ob Cloud oder On-Premise Lösungen - wir erstellen, verwalten und optimieren Ihre Datenbank. Damit steigern wir nicht nur die Leistung der Anwendung, sondern senken auch die Kosten und den Wartungsaufwand während des gesamten Betriebs."
                    icon={StorageIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Reengineering"
                    description="Oft befinden sich schon zahlreiche Software-Systeme in Ihrem Unternehmen, welche nicht mehr in Ihr Portfolio passen oder zu hohe Wartungskosten verursachen. Um diese Software-Systeme abzulösen, entwicklen wir eine gemeinsame Ablöse-Strategie, um einen reibungslosen Übergang zu einem neuen System zu schaffen."
                    icon={AutorenewIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Quality"
                    description="Um Software-Qualität sicherzustellen automatisieren wir den Software Lebenszyklus - vom lokalen Testen bis zur Auslieferung des Produkts. Es erfolgen zusätzlich verschiedene Maßnahmen, wie zum Beispiel der Einsatz von Metriken, um die Software kontinuierlich auf höchste Qualität zu prüfen. Das ermöglich nicht nur einen geringen Wartungsaufwand, sondern unterstützt auch die Stabilität der Software."
                    icon={ShowChartIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Wartung"
                    description="Änderungen während des Betriebs der Software sind nicht unüblich. Aus diesem Grund beraten und helfen wir Ihnen gerne bei der Erweiterung der bestehenden Software. Das garaniert Ihrem Unternehmen neue Anforderungen effizient umzusetzen und sich kontinuierlich an neue Bedingungen anzupassen."
                    icon={BuildIcon}
                    iconColor="primary"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <FloatingButton />
        <CookieConsent />
      </div>
      <Footer />
    </div>
  );
}
