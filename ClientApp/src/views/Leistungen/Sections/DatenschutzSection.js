import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Datenschutzerklärung</h2>
          <br />
          <div className={classes.description} style={{ textAlign: "left" }}>
            <div>
              Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
              EU-Datenschutzgrundverordnung (DSGVO), ist:
              <br />
              <br />
              Mehringer &amp; Partner
              <br />
              Ubostraße 57
              <br />
              81245 München
              <br />
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
                Ihre Betroffenenrechte
              </div>
              Unter den angegebenen Kontaktdaten können Sie jederzeit folgende
              Rechte ausüben:
              <ul>
                <li>
                  Auskunft über Ihre bei uns gespeicherten Daten und deren
                  Verarbeitung (Art. 15 DSGVO),
                </li>
                <li>
                  Berichtigung unrichtiger personenbezogener Daten (Art. 16
                  DSGVO),
                </li>
                <li>
                  Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),
                </li>
                <li>
                  Einschränkung der Datenverarbeitung, sofern wir Ihre Daten
                  aufgrund gesetzlicher Pflichten noch nicht löschen dürfen
                  (Art. 18 DSGVO),
                </li>
                <li>
                  Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art.
                  21 DSGVO) und
                </li>
                <li>
                  Datenübertragbarkeit, sofern Sie in die Datenverarbeitung
                  eingewilligt haben oder einen Vertrag mit uns abgeschlossen
                  haben (Art. 20 DSGVO).
                </li>
              </ul>
              Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese
              jederzeit mit Wirkung für die Zukunft widerrufen.
              <br />
              <br />
              Sie können sich jederzeit mit einer Beschwerde an eine
              Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde
              des Bundeslands Ihres Wohnsitzes oder an die für uns als
              verantwortliche Stelle zuständige Behörde.
              <br />
              <br />
              Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen
              Bereich) mit Anschrift finden Sie unter:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                target="_blank"
                rel=" noreferrer nofollow noopener"
              >
                https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
              </a>
              .
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Erfassung allgemeiner Informationen beim Besuch unserer Website
              </div>
              <strong>Art und Zweck der Verarbeitung:</strong>
              <br />
              <br />
              Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht
              registrieren oder anderweitig Informationen übermitteln, werden
              automatisch Informationen allgemeiner Natur erfasst. Diese
              Informationen (Server-Logfiles) beinhalten etwa die Art des
              Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres
              Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
              <br />
              <br /> Sie werden insbesondere zu folgenden Zwecken verarbeitet:
              <ul>
                <li>
                  Sicherstellung eines problemlosen Verbindungsaufbaus der
                  Website,
                </li>
                <li>
                  Sicherstellung einer reibungslosen Nutzung unserer Website,
                </li>
                <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                zur Optimierung unserer Website.
              </ul>
              Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu
              ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert
              statistisch ausgewertet, um unseren Internetauftritt und die
              dahinterstehende Technik zu optimieren.
              <br />
              <br />
              <strong>Rechtsgrundlage und berechtigtes Interesse:</strong>
              <br />
              <br />
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
              Basis unseres berechtigten Interesses an der Verbesserung der
              Stabilität und Funktionalität unserer Website.
              <br />
              <br />
              <strong>Empfänger:</strong>
              <br />
              <br />
              Empfänger der Daten sind ggf. technische Dienstleister, die für
              den Betrieb und die Wartung unserer Webseite als
              Auftragsverarbeiter tätig werden.
              <br />
              <br />
              <strong>Speicherdauer:</strong>
              <br />
              <br />
              Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung
              nicht mehr erforderlich sind. Dies ist für die Daten, die der
              Bereitstellung der Website dienen, grundsätzlich der Fall, wenn
              die jeweilige Sitzung beendet ist.
              <br />
              <br />
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
              <br />
              <br />
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist
              weder gesetzlich noch vertraglich vorgeschrieben. Ohne die
              IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit
              unserer Website nicht gewährleistet. Zudem können einzelne Dienste
              und Services nicht verfügbar oder eingeschränkt sein. Aus diesem
              Grund ist ein Widerspruch ausgeschlossen.
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Cookies
              </div>
              <br />
              Wie viele andere Webseiten verwenden wir auch so genannte
              „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die
              auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert
              werden, wenn Sie unsere Webseite besuchen.
              <br />
              <br />
              Sie können einzelne Cookies oder den gesamten Cookie-Bestand
              löschen. Darüber hinaus erhalten Sie Informationen und
              Anleitungen, wie diese Cookies gelöscht oder deren Speicherung
              vorab blockiert werden können. Je nach Anbieter Ihres Browsers
              finden Sie die notwendigen Informationen unter den nachfolgenden
              Links:
              <ul>
                <li>
                  Mozilla Firefox:{" "}
                  <a
                    href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen
                  </a>
                </li>
                <li>
                  Internet Explorer:{" "}
                  <a
                    href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies
                  </a>
                </li>
                <li>
                  Google Chrome:{" "}
                  <a
                    href="https://support.google.com/accounts/answer/61416?hl=de"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    https://support.google.com/accounts/answer/61416?hl=de
                  </a>
                </li>
                <li>
                  Opera:{" "}
                  <a
                    href="http://www.opera.com/de/help"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    http://www.opera.com/de/help
                  </a>
                </li>
                <li>
                  Safari:{" "}
                  <a
                    href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE"
                    target="_blank"
                    rel="noreferrer nofollow noopener"
                  >
                    https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE
                  </a>
                </li>
              </ul>
              <strong>Speicherdauer und eingesetzte Cookies:</strong>
              <br />
              <br />
              Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die
              Verwendung von Cookies erlauben, können folgende Cookies auf
              unseren Webseiten zum Einsatz kommen:
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Technisch notwendige Cookies
              </div>
              <br />
              <strong>Art und Zweck der Verarbeitung:</strong>
              <br />
              <br />
              Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu
              gestalten. Einige Elemente unserer Internetseite erfordern es,
              dass der aufrufende Browser auch nach einem Seitenwechsel
              identifiziert werden kann.
              <br />
              <br />
              Der Zweck der Verwendung technisch notwendiger Cookies ist, die
              Nutzung von Websites für die Nutzer zu vereinfachen. Einige
              Funktionen unserer Internetseite können ohne den Einsatz von
              Cookies nicht angeboten werden. Für diese ist es erforderlich,
              dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.
              <br />
              <br />
              Für folgende Anwendungen benötigen wir Cookies:
              <br />
              <br />
              <strong>Rechtsgrundlage und berechtigtes Interesse:</strong>
              <br />
              <br />
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf
              Basis unseres berechtigten Interesses an einer nutzerfreundlichen
              Gestaltung unserer Website.
              <br />
              <br />
              <strong>Empfänger:</strong>
              <br />
              <br />
              Empfänger der Daten sind ggf. technische Dienstleister, die für
              den Betrieb und die Wartung unserer Website als
              Auftragsverarbeiter tätig werden.
              <br />
              <br />
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
              <br />
              <br />
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist
              weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten
              ist jedoch der Dienst und die Funktionsfähigkeit unserer Website
              nicht gewährleistet. Zudem können einzelne Dienste und Services
              nicht verfügbar oder eingeschränkt sein.
              <br />
              <br />
              <strong>Widerspruch</strong>
              <br />
              <br />
              Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach
              Art. 21 DSGVO weiter unten.
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Technisch nicht notwendige Cookies
              </div>
              <br />
              Des Weiteren setzen wir Cookies ein, um das Angebot auf unserer
              Website besser auf die Interessen unserer Besucher abzustimmen
              oder auf Basis statistischer Auswertungen allgemein zu verbessern.
              <br />
              <br />
              Welche Anbieter Cookies setzen, entnehmen Sie bitte den unten
              aufgeführten Informationen zu den eingesetzten Darstellungs-,
              Tracking-, Remarketing- und Webanalyse-Technologien.
              <br />
              <br />
              <strong>Rechtsgrundlage:</strong>
              <br />
              <br />
              Rechtsgrundlage für diese Verarbeitungen ist jeweils Ihre
              Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.
              <br />
              <br />
              <strong>Empfänger:</strong>
              <br />
              <br />
              Empfänger der Daten sind ggf. technische Dienstleister, die für
              den Betrieb und die Wartung unserer Website als
              Auftragsverarbeiter tätig werden.
              <br />
              <br />
              Weitere Empfänger entnehmen Sie bitte den unten aufgeführten
              Informationen zu den eingesetzten Darstellungs-, Tracking-,
              Remarketing- und Webanalyse-Technologien.
              <br />
              <br />
              <strong>Drittlandtransfer:</strong>
              <br />
              <br />
              Informationen hierzu entnehmen Sie bitte aus den Auflistungen der
              einzelnen Darstellungs-, Tracking-, Remarketing- und
              Webanalyse-Anbietern.
              <br />
              <br />
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
              <br />
              <br />
              Natürlich können Sie unsere Website grundsätzlich auch ohne
              Cookies betrachten. Webbrowser sind regelmäßig so eingestellt,
              dass sie Cookies akzeptieren. Im Allgemeinen können Sie die
              Verwendung von Cookies jederzeit über die Einstellungen Ihres
              Browsers deaktivieren (siehe Widerruf der Einwilligung).
              <br />
              <br />
              Bitte beachten Sie, dass einzelne Funktionen unserer Website
              möglicherweise nicht funktionieren, wenn Sie die Verwendung von
              Cookies deaktiviert haben.
              <br />
              <br />
              <strong>Widerruf der Einwilligung:</strong>
              <br />
              <br />
              Sie können Ihre Einwilligung jederzeit über unser
              Cookie-Consent-Tool widerrufen.
              <br />
              <br />
              <strong>Profiling:</strong>
              <br />
              <br />
              Inwiefern wir das Verhalten von Websitebesuchern mit
              pseudonymisierten Nutzerprofilen analysieren, entnehmen Sie bitte
              den unten aufgeführten Informationen zu den eingesetzten
              Darstellungs-, Tracking-, Remarketing- und
              Webanalyse-Technologien.
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Kontaktformular
              </div>
              <br />
              <strong>Art und Zweck der Verarbeitung:</strong>
              <br />
              <br />
              Die von Ihnen eingegebenen Daten werden zum Zweck der
              individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die
              Angabe einer validen E-Mail-Adresse sowie Ihres Namens
              erforderlich. Diese dient der Zuordnung der Anfrage und der
              anschließenden Beantwortung derselben. Die Angabe weiterer Daten
              ist optional.
              <br />
              <br />
              <strong>Rechtsgrundlage:</strong>
              <br />
              <br />
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO).
              <br />
              <br />
              Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine
              unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben
              werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche
              Anschlussfragen gespeichert.
              <br />
              <br />
              Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen,
              erfolgt die Verarbeitung der in das Kontaktformular eingegebenen
              Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1
              lit. b DSGVO).
              <br />
              <br />
              <strong>Empfänger:</strong>
              <br />
              <br />
              Empfänger der Daten sind ggf. Auftragsverarbeiter.
              <br />
              <br />
              <strong>Speicherdauer:</strong>
              <br />
              <br />
              Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage
              gelöscht.
              <br />
              <br />
              Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den
              gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten
              nach Ablauf dieser Fristen.
              <br />
              <br />
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
              <br />
              <br />
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt
              freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern
              Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage
              mitteilen.
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Verwendung von Google Analytics
              </div>
              <br />
              Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser
              Website Google Analytics eingesetzt, ein Webanalysedienst der
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA
              (nachfolgend: „Google“). Google Analytics verwendet sog.
              „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Webseite durch Sie
              ermöglichen. Die durch das Cookie erzeugten Informationen über
              Ihre Benutzung dieser Webseite werden in der Regel an einen Server
              von Google in den USA übertragen und dort gespeichert. Aufgrund
              der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird
              Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
              der Europäischen Union oder in anderen Vertragsstaaten des
              Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur
              in Ausnahmefällen wird die volle IP-Adresse an einen Server von
              Google in den USA übertragen und dort gekürzt. Die im Rahmen von
              Google Analytics von Ihrem Browser übermittelte IP-Adresse wird
              nicht mit anderen Daten von Google zusammengeführt.
              <br />
              <br />
              Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden
              Sie unter{" "}
              <a
                href="https://www.google.com/analytics/terms/de.html und unter https://policies.google.com/?hl=de"
                rel="noreferrer noopener"
                target="_blank"
              >
                https://www.google.com/analytics/terms/de.html und unter
                https://policies.google.com/?hl=de
              </a>
              .
              <br />
              <br />
              Im Auftrag des Betreibers dieser Website wird Google diese
              Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten,
              um Reports über die Webseitenaktivitäten zusammenzustellen und um
              weitere mit der Websitenutzung und der Internetnutzung verbundene
              Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen.
              <br />
              <br />
              Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B.
              User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten
              automatisch gelöscht. Die Löschung von Daten, deren
              Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
              Monat.
              <br />
              <br />
              <strong>Widerruf der Einwilligung:</strong>
              <br />
              <br />
              Sie können das Tracking durch Google Analytics auf unserer Website
              unterbinden, indem Sie{" "}
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Google Opt-Out-Cookie setzen!
              </div>
              {/* <a
                title="Google Analytics Opt-Out-Cookie setzen"
                onClick="gaOptout();alert('Google Analytics wurde deaktiviert');"
                href="#"
              >
                diesen Link anklicken
              </a> */}
              . Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit
              wird die Erfassung durch Google Analytics für diese Website und
              für diesen Browser zukünftig verhindert, solange das Cookie in
              Ihrem Browser installiert bleibt.
              <br />
              <br />
              Sie können darüber hinaus die Speicherung der Cookies durch eine
              entsprechende Einstellung Ihrer Browser-Software verhindern; wir
              weisen Sie jedoch darauf hin, dass Sie in diesem Fall
              gegebenenfalls nicht sämtliche Funktionen dieser Website
              vollumfänglich werden nutzen können.
              <br />
              <br />
              Sie können darüber hinaus die Erfassung der durch das Cookie
              erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl.
              Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
              durch Google verhindern, indem sie das unter dem folgenden Link
              verfügbare Browser-Plugin herunterladen und installieren:{" "}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                rel="noreferrer noopener"
                target="_blank"
              >
                Browser Add On zur Deaktivierung von Google Analytics
              </a>
              .
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Verwendung von Scriptbibliotheken (Google Webfonts)
              </div>
              <br />
              Um unsere Inhalte browserübergreifend korrekt und grafisch
              ansprechend darzustellen, verwenden wir auf dieser Website „Google
              Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain
              View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von
              Schriften.
              <br />
              <br />
              Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                https://www.google.com/policies/privacy/
              </a>
              .
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Google AdWords
              </div>
              <br />
              Unsere Website nutzt das Google Conversion-Tracking.
              Betreibergesellschaft der Dienste von Google AdWords ist die
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043,
              USA. Sind Sie über eine von Google geschaltete Anzeige auf unsere
              Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem
              Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt,
              wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt.
              <br />
              <br />
              Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie
              ist noch nicht abgelaufen, können wir und Google erkennen, dass
              der Nutzer auf die Anzeige geklickt hat und zu dieser Seite
              weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein
              anderes Cookie. Cookies können somit nicht über die Websites von
              AdWords-Kunden nachverfolgt werden. Die mithilfe des
              Conversion-Cookies eingeholten Informationen dienen dazu,
              Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich
              für Conversion-Tracking entschieden haben. Die Kunden erfahren die
              Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und
              zu einer mit einem Conversion-Tracking-Tag versehenen Seite
              weitergeleitet wurden. Sie erhalten jedoch keine Informationen,
              mit denen sich Nutzer persönlich identifizieren lassen.
              <br />
              <br />
              Nähere Informationen über die Datenverarbeitung durch Google
              können Sie den Google-Datenschutzhinweisen entnehmen:{" "}
              <a
                href="https://policies.google.com/privacy"
                rel="noreferrer noopener nofollow"
                target="_blank"
              >
                https://policies.google.com/privacy
              </a>
              . Dort können Sie im Datenschutzcenter auch Ihre persönlichen
              Datenschutz-Einstellungen verändern.
              <br />
              <br />
              <strong>Widerruf der Einwilligung:</strong>
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                SSL-Verschlüsselung
              </div>
              <br />
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
              verwenden wir dem aktuellen Stand der Technik entsprechende
              Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
              <br />
              <br />
              <Divider />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO
              </div>
              <br />
              <strong>Einzelfallbezogenes Widerspruchsrecht</strong>
              <br />
              <br />
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1
              lit. f DSGVO (Datenverarbeitung auf der Grundlage einer
              Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt
              auch für ein auf diese Bestimmung gestütztes Profiling im Sinne
              von Art. 4 Nr. 4 DSGVO.
              <br />
              <br />
              Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten
              nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
              von Rechtsansprüchen.
              <br />
              <br />
              <strong>Empfänger eines Widerspruchs</strong>
              <br />
              <br />
              Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der
              EU-Datenschutzgrundverordnung (DSGVO), ist:
              <br />
              <br />
              Mehringer &amp; Partner
              <br />
              Ubostraße 57
              <br />
              81245 München
              <br />
              Telefon: 0151-41445077
              <br />
              E-Mail:{" "}
              <a href="mailto:info@mehringer-partner.de">
                info@mehringer-partner.de
              </a>
              <br />
              <br />
              <Divider />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Änderung unserer Datenschutzbestimmungen
              </div>
              <br />
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um Änderungen unserer Leistungen in der Datenschutzerklärung
              umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren
              erneuten Besuch gilt dann die neue Datenschutzerklärung.
              <br />
              <br />
              <div
                className={classes.title}
                style={{ fontWeight: "bold", margin: "0" }}
              >
                Fragen an den Datenschutzbeauftragten
              </div>
              <br />
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail an:{" "}
              <a href="mailto:info@mehringer-partner.de">
                info@mehringer-partner.de
              </a>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
