import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { SnackbarContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactGA from 'react-ga';

const StyledSnackbar = withStyles({
  root: {
    background: "#101C3e",
    color: "white",
    height: "fit-content",
    width: "-webkit-fill-available",
    position: "fixed",
    bottom: 0,
    boxShadow:
      "0 4px 15px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.5)",
  },
})(SnackbarContent);

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function CookieConsent() {
  const [state, setState] = React.useState({
    open: true,
    Transition: Slide,
  });

  const handleClick = (Transition) => () => {

    ReactGA.initialize('G-SQB93D8H8M');
    ReactGA.pageview(window.location.pathname + window.location.search);
    
    setState({
      open: false,
      Transition,
    });
    localStorage.setItem('cookies_enabled', '1');
  };

  const handleClose = () => {
    localStorage.setItem("accepted", false);
    setState({
      ...state,
      open: false,
    });
    localStorage.setItem('cookies_enabled', '0');
    window['ga-disable-G-SQB93D8H8M'] = true;
  };

  const checkCookieConsent = () => {
    if (localStorage.getItem('cookies_enabled') === '1' || localStorage.getItem('cookies_enabled') === '0' ) {
    
      setState({
        ...state,
        open: false,
      })
    }
    else if (localStorage.getItem('cookies_enabled') === 'null') {
      
      setState({
        ...state,
        open: true,
      })
    }
  }


  return (
    <div>
      <Snackbar
        style={{ width: "calc(100% - 120px)" }}
        open={state.open}
        onEnter={checkCookieConsent}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        onClick={() => handleClick(SlideTransition)}
        
      >
        <StyledSnackbar
          message={
            <div>
              Diese Internetseite verwendet Cookies und Google Analytics für die
              Analyse und Statistik. Cookies helfen uns, die
              Benutzerfreundlichkeit unserer Website zu verbessern. Durch die
              weitere Nutzung der Website stimmen Sie der Verwendung zu. Weitere
              Informationen hierzu finden Sie in unserer{" "}
              <a
                href="/datenschutz"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Datenschutzerklärung
              </a>
              .
            </div>
          }
          action={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <Button
                style={{
                  backgroundColor: "white",
                  color: "primary",
                  marginRight: "20px",
                }}
                onClick={handleClick(SlideTransition)}
              >
                Akzeptieren
              </Button>
              <Button style={{ color: "white", marginRight: "20px" }} onClick={() => handleClose()}>
                Ablehnen
              </Button>
            </div>
          }
        />
      </Snackbar>
    </div>
  );
}
