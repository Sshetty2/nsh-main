export const styles = (theme: any) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    alignItems: 'center',
    height: '7.5vh',
    zIndex: theme.zIndex.appBar,
    display: 'flex'
  },
  toolbar: {
    height: '100%',
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: '175px'
  },
  clientsButton: {
    marginLeft: theme.spacing.unit * 2
  },
  candidatesButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit * 2
  }
});

export default styles;
