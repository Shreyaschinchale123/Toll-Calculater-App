// src/components/CalculateTollButton.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { calculateToll } from '../services/tollService';

function CalculateTollButton() {
  const dispatch = useDispatch();

  const handleCalculateToll = async () => {
    try {
      const waypoints = []; // Populate with actual waypoints
      const result = await calculateToll(waypoints);
      dispatch({ type: 'SET_TOLL_RESULT', payload: result });
    } catch (error) {
      console.error('Error calculating toll:', error);
    }
  };

  return (
    <button id="calculateToll" onClick={handleCalculateToll}>
      Calculate Toll
    </button>
  );
}

export default CalculateTollButton;
