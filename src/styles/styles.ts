import { makeStyles } from '@material-ui/core';

export const useCommonStyles = makeStyles(() => ({
  fontSize16: {
    fontSize: 16,
  },
  fontSize22: {
    fontSize: 22,
  },
  centered: {
    justifyContent: 'center',
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  marginBottom: {
    marginBottom: 16,
  },
  marginTop32: {
    marginTop: 32,
  },
  main: {
    flexGrow: 1,
    minHeight: '80vh',
    padding: '0 20px',
  },
  paddingsArround32: {
    padding: 32,
  },
}));

export const useFormMutationStyles = makeStyles(() => ({
  formInput: {
    width: '100%',
    marginTop: 8,
  },
  formInputWithExtraSelect: {
    width: '75%',
    marginTop: 16,
    marginRight: '5%',
  },
  extraSelect: {
    width: '20%',
  },
  inputsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: 568,
    margin: '32px auto',
  },
  buttonsContainer: {
    maxWidth: 568,
    margin: '0 auto',
  },
  button: {
    minWidth: 230,
  },
  label: {
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  accordion: {
    width: '100%',
  },
  formInputContainer: {
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: -20,
    right: 0,
  },
  dividerContainer: {
    marginBottom: 16,
  },
  additionalLink: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 12,
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
  },
  errorAlert: {
    marginBottom: 8,
    width: '100%',
  },
}));

export const useFooterStyles = makeStyles(() => ({
  footerStyles: {
    backgroundColor: 'gray',
    padding: '40px 20px',
    borderRadius: '20px',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    minHeight: '20vh',
    marginTop: 64,
  },
}));
