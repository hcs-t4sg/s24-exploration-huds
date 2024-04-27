"use client"

import styles from './update.module.css';
import * as React from 'react';
import { useState } from 'react';
import Input from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function UpdateForm() {
  const [menuItem, setMenuItem] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!menuItem) {
      alert('Please fill out the Menu Item.');
      return;
    }
    const confirmed = window.confirm("Are you sure you want to submit these updates?");
    setIsConfirmed(confirmed);
    if (confirmed) {
      console.log("Updates submitted");
    } else {
      console.log("Submission cancelled");
    }
  };

  const handleCloseOverlay = () => {
    setIsConfirmed(false);
    window.location.href = 'http://localhost:3000/customhome'; 
  };

  return (
    <div className={styles.heading}>
      <h1>Provide the Most Updated Menu Item</h1>
      <div className={styles.inputcontainer}>
        <Input
          placeholder="Menu Item"
          required
          value={menuItem}
          onChange={e => setMenuItem(e.target.value)}
        />
        <Input
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <FormControl fullWidth>
          {category === '' && <InputLabel id="category-label">Item Category</InputLabel>}  
          <Select
            labelId="category-label"
            value={category}
            onChange={e => setCategory(e.target.value)}
            label={category ? '' : 'Item Category'}  // Remove label from Select once a category is selected
          >
            <MenuItem value="Entree">Entree</MenuItem>
            <MenuItem value="Soup">Soup</MenuItem>
            <MenuItem value="Dessert">Dessert</MenuItem>
            <MenuItem value="Salad bar">Salad Bar</MenuItem>
            <MenuItem value="Vegetable">Vegetable</MenuItem>
            <MenuItem value="Vegan/Vegetarian">Vegan/Vegetarian</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.button}>
          <button type="submit" onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
      <div className={`${styles.overlay} ${isConfirmed ? styles.active : ''}`}>
        <div className={styles.overlayContent}>
          <h2>Menu Update Submitted Successfully!</h2>
          <button onClick={handleCloseOverlay} className={styles.overlayButton}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
