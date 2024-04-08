
function calculateBMI(height, weight, heightUnit, weightUnit) {

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
function getBMICategory(bmi) {
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

module.exports = { calculateBMI, getBMICategory };