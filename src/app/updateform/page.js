import styles from './update.module.css';
import * as React from 'react';
import Input from '@mui/material/Input';

export default function updateform() {
  return (
    <div className={styles.heading}>
      <h1> Provide the Most Updated Menu Item</h1>
    <div className={styles.inputcontainer}>
        <Input placeholder="Menu Item" required />
        <Input placeholder="Description" />
        <Input placeholder="Suggestions" />
      <div className={styles.button}>
        <button type="submit">Submit</button>
      </div>
    </div>
    </div>
  );
}