import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

const useStyles = makeStyles(styles);

export default function KontaktSection(props) {
    const getUrl = window.location;
    const baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
  const classes = useStyles();
  const url = baseUrl + 'api/mail';
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
    const [message, setMessage] = useState("");

  let isValid = true;

  const send = () => {
    const router = new Router();

    if (!isValid)
      return;

    if (name === "" || email === "" || message === "")
      return;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
              Body: message,
              EMail: email,
              Name: name
          })
    };
    fetch(url, requestOptions)
        .then(response => props.okFun(response.status == 200));
    setName("");
    setMail("");
    setMessage("");
  }
  
  const handleName = event => {
    setName(event.target.value);
  };
  const handleMail = event => {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const value = event.target.value;

    if(!re.test(value)) {
      isValid = false;
    }

    setMail(event.target.value);
  };
  const handleMessage = event => {
    setMessage(event.target.value);
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Kontakt</h2>
          <h4 className={classes.description}>
            Kontaktieren Sie uns, um gemeinsam bei einem kostenlosen
            Beratungsgespräch die passende IT Lösung für Ihr Unternehmen zu
            finden. Wir freuen uns darauf gemeinsam an Ihrer IT zu arbeiten!
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Name"
                  id="name"
                  inputProps={{
                    onChange: handleName
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="E-Mail"
                  id="email"
                  inputProps={{
                    onChange: handleMail
                  }}
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Nachricht"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                  onChange: handleMessage,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={send}>Nachricht abschicken</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
