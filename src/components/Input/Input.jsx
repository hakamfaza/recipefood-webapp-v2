import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import styles from '../../assets/styles/styles';

const InputAuth = (params) => {
  return (
    <>
      <FormGroup>
        <Label for={params.for} style={styles.txtLabel}>
          {params.title}
        </Label>
        <Input
          id={params.id}
          name={params.name}
          type={params.type}
          placeholder={params.placeholder}
          onChange={params.onChange}
          style={styles.authInput}
          className="input"
          required
        />
      </FormGroup>{' '}
    </>
  );
};

export default InputAuth;
