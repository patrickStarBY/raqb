export type TDialog = {
  title: string;
  text: string;
  status: 'success' | 'error';
};

export type TDialogState = {
  open: boolean;
} & TDialog;
