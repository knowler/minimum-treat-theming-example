import React from 'react';
import {useStyles} from 'react-treat';
import * as styleRefs from './Button.treat';

export const Button = ({children, ...rest}) => {
  const styles = useStyles(styleRefs);

  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
};
