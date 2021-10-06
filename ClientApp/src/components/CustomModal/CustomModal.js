import React from "react";
import { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        borderRadius: "4px",
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const StyledCheckIcon = withStyles({
    root: {
      fill: "green",
      fontSize: "48px",
      marginRight: "20px",
    },
  })(CheckIcon);

const StyledCloseIcon = withStyles({
    root: {
      cursor: "pointer",
      color: "#999",
      fontSize: "16px",
      position: "absolute",
      right: "15px",
      top: "10px",
    },
  })(CloseIcon);

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <StyledCloseIcon onClick={handleClose} />
            <h2 style={{ display: "flex", flexDirection: "row", alignItems: "center", lineHeight: "1em", margin: "10px 0 0 25px" }} id="simple-modal-title"><StyledCheckIcon /> <div style={{ fontSize: "20px" }}>Nachricht erfolgreich abgeschickt</div></h2>
        </div>
    );

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}