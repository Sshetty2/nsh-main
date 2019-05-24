export const styles = (theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 4
  },
  footer: {
    padding: theme.spacing.unit * 2,
    marginTop: 'auto',
    backgroundColor: 'white'
  }
});

export default styles;
