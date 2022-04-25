import React from 'react';
import { Button } from 'reactstrap';
import styles from '../../assets/styles/styles';
import '../../assets/styles/style.css';

const ButtonComponents = (params) => {
  return (
    <>
      <Button
        style={(styles.buttonSubmit, params.style)}
        type="submit"
        className={('btn-shadow', params.className)}
      >
        {params.title}
      </Button>
    </>
  );
};

export default ButtonComponents;
