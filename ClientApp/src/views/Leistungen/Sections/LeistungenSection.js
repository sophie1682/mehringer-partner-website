import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>IT-Beratung</h2>
          <br />
          <div className={classes.description} style={{ textAlign: "left" }}>
            <div>
              Eine zukunftorientierte IT-Strategie ist mittlerweile nicht nur
              für große Konzerne relevant. Vielmehr bedarf es in jedem
              Unternehmen einer klaren Ausrichtung der eingesetzten Hard- und
              Software. Die Strategie soll dabei helfen, den langfristigen
              Unternehmenserfog zu sichern und einen Rahmen für die Entwicklung
              IT-Infrastruktur und Informationstechnik vorgeben.
            </div>
            <br />
            <div>
              Die Vielzahl an möglichen Produkten und Technologien führen nicht
              selten zu einer kurzlebigen Ausrichtung der
              Unternehmens-Architektur. Bei Mehringer &amp; Partner wird Ihr
              Unternehmen analysiert und ein nachhaltiges IT-Konzept in enger
              Zusammenarbeit mit allen Stakeholdern und dem Management
              erarbeitet. Folgende Ziele sind hierfür zentral
              <br />
              <br />
              <ul>
                <li>Wertschöpfung durch IT steigern</li>
                <li>Rahmenbedingunge für das IT-Management definieren</li>
                <li>
                  Richtungsvorgaben für die Entwicklung der IT aus den
                  Unternehmenszielen ableiten
                </li>
              </ul>
              <br />
              Die Vorteile sind unteranderem IT-gestützte Geschäftsprozesse,
              Einhaltung von Compliance, Kostenoptimierung. Natürlich erarbeiten
              wir nicht nur IT-Strategiekonzepte, sondern beraten in allen ICT
              Angelegenheiten. Wir begleiten Sie auf diesem Weg und übernehmen
              bei Bedarf die Durchführung oder stehen Ihnen bei der Umsetzung
              beratend zur Seite.
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
