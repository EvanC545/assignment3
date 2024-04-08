
export function calculateBMI(height, weight) {
    // get units
    const heightUnit = document.getElementById('heightUnit').value;
    const weightUnit = document.getElementById('weightUnit').value;

    // get the calculate button
    const calculateButton = document.getElementById('calculateButton');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    // validate inputs
    // if (height === '' || weight === '') {
    //     calculateButton.disabled = true;
    //     return 0;
    // }
    
    // convert height to meters
    let heightCm;
    if (heightUnit === 'in') {
        heightCm = inchesToCm(height);
    } else {
        heightCm = height;
    }

    // convert weight to kg
    let weightKg;
    if (weightUnit === 'lb') {
        weightKg = poundsToKg(weight);
    } else {
        weightKg = weight;
    }

    // calculate BMI
    const heightM = heightCm / 100; 

    // BMI = weight (kg) / height (m) ^ 2
    // prevent division by zero
    if (heightM === 0) {
        return 0;
    }

    const bmi = weightKg / (heightM * heightM);
    return bmi;
}
function inchesToCm(inches) {
    return inches * 2.54;
}
function poundsToKg(pounds) {
    return pounds * 0.453592;
}
export function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}
