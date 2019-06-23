import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import Fade from '@material-ui/core/Fade';

// import React from 'react'

// function loader() {
//     return (
//         <FontAwesomeIcon icon={faSpinner} size="3x" spin />
//     );
// }

// export default loader


function CircularIndeterminate(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <CircularProgress className={classes.progress} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);