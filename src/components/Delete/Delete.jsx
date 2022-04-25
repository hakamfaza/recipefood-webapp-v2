import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import styles from '../../assets/styles/components/action/action.module.css';

const Delete = () => {
  return (
    <>
      <MdOutlineDelete className={styles.deleteIcon} />
    </>
  );
};

export default Delete;
