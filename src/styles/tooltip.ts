import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const useTooltipStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      position: 'relative',
      width: '100%',
      paddingRight: 32,
      marginBottom: 16,
    },
    tooltip: {
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 10px)',
    },
    tooltipWithoutQuestion: {
      width: '100%',
    },
  }),
);
