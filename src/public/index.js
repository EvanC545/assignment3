import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { calculateBMI, getBMICategory } from './bmiCalculator';
import './index.css';
import App from './App';
import counter from './counter';

// Get the input values
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const heightUnit = document.getElementById('heightUnit');
const weightUnit = document.getElementById('weightUnit');
const calculateButton = document.getElementById('calculateButton');
let bmiValue = document.getElementById('bmi');
let bmiCategory = document.getElementById('bmiCategory');

document.addEventListener('DOMContentLoaded', () => {
  calculateButton.addEventListener('click', () => {
    const heightValue = height.value;
    const weightValue = weight.value;
    const heightUnitValue = heightUnit.value;
    const weightUnitValue = weightUnit.value;

    // calculate BMI
    const bmi = calculateBMI(heightValue, weightValue, heightUnitValue, weightUnitValue);
    let category = getBMICategory(bmi);

    // display the result
    bmiValue.value = bmi.toFixed(2);
    bmiCategory.value = category;
  });
});