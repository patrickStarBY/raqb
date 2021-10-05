import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useModalStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      position: 'absolute',
      width: '100%',
      maxWidth: 800,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    infoCards: {
      padding: 16,
      minHeight: 250,
      margin: 8,
    },
    boldText: {
      fontWeight: 700,
    },
    label: {
      marginTop: 16,
      fontWeight: 500,
    },
  }),
);
