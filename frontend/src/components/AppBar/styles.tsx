export const styles = (theme: any) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar,
    flexGrow: 1
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  }, 
  title: {
    marginLeft: theme.spacing.unit,
    flexGrow: 1
  },
  menuButton: {
    marginLeft: '-4px',
    marginRight: theme.spacing.unit * 2
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit
  }
});

export default styles;
