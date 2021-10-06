import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import stylesOne from "assets/jss/material-kit-react/views/components.js";
import stylesTwo from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
// import Lottie from "react-lottie";
// import animationData from "assets/lotties/marketing-analytics.json";
import InfoArea from "components/InfoArea/InfoArea.js";
import ForumIcon from "@material-ui/icons/Forum";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import classNames from "classnames";
import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from "../../../components/Parallax/Parallax";
import Footer from "../../../components/Footer/Footer";
import FloatingButton from "components/CustomFab/CustomFab";
import CookieConsent from "components/CustomSnackbar/CustomSnackbar";

const useStylesOne = makeStyles(stylesOne);
const useStylesTwo = makeStyles(stylesTwo);

export default function Home(props) {
  const classesOne = useStylesOne();
  const classesTwo = useStylesTwo();
  const { ...rest } = props;

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      ></Header>
      <Parallax
        image={require("assets/img/bg-header.png")}
        style={{ height: "70vh" }}
      >
        <div className={classesOne.container}>
          <GridContainer>
            <GridItem>
              <div className={classesOne.brand}>
                <h1 className={classesOne.title}>Mehringer &amp; Partner</h1>
                <h3 className={classesOne.subtitle}>
                  Werte schaffen - Zukunft sichern
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classesOne.main, classesOne.mainRaised)}>
        {/* TODO: make lottie section mobile friendly */}
        <div className={classesTwo.sections}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={8}>
              <div style={{ marginRight: "40px" }}>
                <Lottie options={defaultOptions} height={250} width={250} />
              </div>
            </GridItem> */}
            <GridItem xs={12} sm={12} md={8}>
              <h5
                className={classesTwo.description}
                style={{ padding: "40px 15px 0 15px", textAlign: "center" }}
              >
                Ihr Unternehmen ist noch nicht digitalisiert oder haben Sie
                Probleme mit Ihrer vorhandenen IT-Infrastruktur? Bei Mehringer
                &amp; Partner finden Sie die Expertise, Legacy-IT Systeme
                abzulösen und einen fließenden Übergang zu einer nachhaltigen
                IT-Infrastruktur zu schaffen. Einerseits beraten wir Sie in
                allen IT-Aspekten und analysieren die Möglichkeiten Ihr
                Unternehmen, sowie die Prozesse, zu digitalisieren. Andererseits
                entwicklen wir individuelle Software, insbesondere betriebliche
                Informationssysteme, um eine maßgeschneiderte Softwarelösung für
                Ihr Unternehmen bereitzustellen.
              </h5>
            </GridItem>
          </GridContainer>
        </div>
        <div
          className={classesTwo.section}
          style={{ margin: "20px 20px 0 20px" }}
        >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classesTwo.title}>Unsere Leistungen</h2>
            </GridItem>
          </GridContainer>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="IT-Beratung"
                  description="Eine zukunftorientierte IT-Strategie ist mittlerweile nicht nur für große Konzerne relevant. Vielmehr bedarf es in jedem Unternehmen einer klaren Ausrichtung der eingesetzten Hard- und Software. Die Vielzahl an möglichen Produkten und Technologien führen nicht selten zu einer kurzlebigen Ausrichtung der Unternehmens-Architektur. Bei Mehringer &amp; Partner wird Ihr Unternehmen analysiert und ein nachhaltiges IT-Konzept erarbeitet. Wir begleiten Sie auf diesem Weg und übernehmen bei Bedarf auch die Durchführung."
                  icon={ForumIcon}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Individual-Software"
                  description="Um die Digitalisierung der Arbeitswelt zu meistern, bedarf es Software, die an die individuellen Bedürfnisse angepasst ist. Unser umfangreiches Fachwissen und die technische Expertise hilft Ihrem Unternehmen Lösungen zu finden. Deshalb begeleiten wir Sie agil durch den kompletten Software Lebenszyklus. Natürlich übernehmen wir auch die Weiterentwicklung und Wartung des neues Systems oder lösen alte Technologien für Sie ab. Wir erörtern die beste Technologie für Ihren Anwendungsfall wie z.B. Java, C++, Angular, React, JavaScript, Db2, Microsoft SQL-Server, DataCool, PL/1"
                  icon={Fingerprint}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <InfoArea
                  title="Software-Produkte"
                  description="Es gibt unterschiedliche Software-Produkte die Ihrem Unternehmen helfen können, kosteneffizient Prozesse zu digitalisieren. Zum Beispiel richten wir Ihnen Produkte von Atlassian und ServiceNow ein, um vorgefertige Softwarelösungen in Ihr Unternehmen zu integrieren. Diese sind nicht nur kosteneffizient als Cloud-Lösungen, sondern haben einen großen Funktionsumfang und skalieren von Klein- bis Großunternehmen. Zudem sind sie in nahezu allen Branchen etabliert und haben einen geringen Wartungsaufwand."
                  icon={Extension}
                  iconColor="primary"
                  vertical
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <FloatingButton />
        <CookieConsent />
      </div>
      <Footer />
    </div>
  );
}
