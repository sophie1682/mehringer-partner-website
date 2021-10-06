import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href={"/it-beratung"}>
          IT-Beratung
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href={"/software-entwicklung"}>
          Software-Entwicklung
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href={"/kontakt"}>
          Kontakt
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href={"https://www.linkedin.com/company/mehringer-partner"}
          style={{ padding: "0 30px" }}
        >
          <LinkedInIcon
            style={{ width: "30px", height: "auto", paddingTop: "4px" }}
          />
        </Button>
      </ListItem>
    </List>
  );
}
