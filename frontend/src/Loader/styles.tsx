const styles = (theme: any) => ({
  root: {
    position: 'fixed',
    left: '0%',
    top: '0%',
    right: '0%',
    bottom: '0%',
    // z-index: 9999,
    display: "flex",
    // -webkit-box-pack: center,
    // -webkit-justify-content: center,
    // -ms-flex-pack: center,
    justifyContent: "center",
    // -webkit-box-align: center,
    // -webkit-align-items: center;
    // -ms-flex-align: center;
    alignItems: "center",
    backgroundImage: "radial-gradient(circle farthest-corner at 50% 50%, #fff 5%, #eef8ff)"
  },
  progress: {
    margin: theme.spacing.unit * 4
  }
});

export default styles