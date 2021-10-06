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
          <h2 className={classes.title}>Impressum</h2>
          <br />
          <div className={classes.description} style={{ textAlign: "center" }}>
            <div>
              Angaben gemäß § 5 TMG
              <br />
              <br />
              Mehringer &amp; Partner
              <br />
              Ubostraße 57
              <br />
              81245 München
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Vertreten durch:
              </div>
              Dominik Mehringer
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Kontakt:
              </div>
              Telefon: 0151-41445077
              <br />
              E-Mail:{" "}
              <a href="mailto:info@mehringer-partner.de">
                info@mehringer-partner.de
              </a>
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Haftung für Links
              </div>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
