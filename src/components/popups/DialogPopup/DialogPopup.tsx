import "./DialogPopup.scss";

import { Collapse, IconButton, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Alert, AlertProps, AlertTitle } from "@material-ui/lab";
import cn from "classnames";
import React, { useEffect, useRef } from "react";
import { TDialogState } from "../../../types";

const TIMEOUT = 2000;

type TDialogPopup = {
  clickBtn: () => void;
} & TDialogState &
  Omit<AlertProps, "children">;

const DialogPopupComponent: React.FC<TDialogPopup> = ({
  title,
  text,
  clickBtn,
  status,
  open,
  ...props
}) => {
  const timer = useRef<number>(0);

  useEffect(() => {
    clearTimeout(timer.current);
    if (status === "success") {
      timer.current = window.setTimeout(() => {
        clickBtn();
      }, TIMEOUT);
    }
  });

  return (
    <Collapse in={open} unmountOnExit>
      <div className={cn("dialog-popup", `dialog-popup_${status}`)}>
        <Alert
          severity={status}
          {...props}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={clickBtn}
              className="dialog-popup__icon"
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          className="dialog-popup__wrapper"
        >
          <AlertTitle className="dialog-popup__title">{title}</AlertTitle>
          <Typography className="dialog-popup__text" variant="h5">
            {text}
          </Typography>
        </Alert>
      </div>
    </Collapse>
  );
};

export const DialogPopup = React.memo(DialogPopupComponent);
