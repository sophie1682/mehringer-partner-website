import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CloseIcon from "@material-ui/icons/Close";
import Slide from '@material-ui/core/Slide';

const StyledIconButton = withStyles({
  root: {
    background: "#101C3e",
    color: "white",
    height: "70px !important",
    width: "70px !important",
    margin: "0 20px 20px 0",
    position: "fixed",
    bottom: 0,
    right: 0,
    boxShadow:
      "0 4px 15px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.5)",
    "&:hover": {
      backgroundColor: "#1d2942",
    },
  },
})(IconButton);

const StyledCard = withStyles({
  root: {
    height: "200px",
    width: "300px",
    margin: "0 10px 10px 0",
    position: "fixed",
    opacity: 1,
    bottom: 0,
    right: 0,
    boxShadow:
      "0 4px 15px 0 rgba(0, 0, 0, 0.5), 0 1px 2px 0 rgba(0, 0, 0, 0.5)",
  },
})(Card);

const StyledCloseIcon = withStyles({
  root: {
    cursor: "pointer",
    color: "#999",
    fontSize: "16px",
    margin: "5px",
    float: "right",
  },
})(CloseIcon);

export default function FloatingButton() {
  const [showCard, setShowCard] = useState(false);
  const [checked, setChecked] = useState(true);

  if (showCard)
    return (
      <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <StyledCard>
        <StyledCloseIcon onClick={() => setShowCard(false)} />
        <div
          style={{
            color: "primary",
            fontSize: "18px",
            margin: "10px",
            textAlign: "center",
          }}
        >
          Kontakt
        </div>
        <div
          style={{
            color: "#999",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Haben wir Ihr Interesse geweckt? Dann nehmen Sie Kontakt zu uns auf
          und vereinbaren Sie eine{" "}
          <a href="/kontakt" style={{ textDecoration: "underline" }}>
            kostenlose Erstberatung.
          </a>
        </div>
      </StyledCard>
      </Slide>
    );
  else
    return (
      <StyledIconButton onClick={() => setShowCard(true)}>
        <MailOutlineIcon style={{ fontSize: "32px" }} />
      </StyledIconButton>
    );
}
