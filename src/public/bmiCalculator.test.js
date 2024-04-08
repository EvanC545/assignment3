// redefine function because of jest issues
function calculateBMI(height, weight, heightUnit, weightUnit){
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


// Test case 1: Calculate BMI with metric units
test('Calculate BMI with metric units', () => {
  // Arrange
  const height = 180; // in centimeters
  const weight = 75; // in kilograms

  // Act
  const result = calculateBMI(height, weight, 'cm', 'kg');

  // Assert
  expect(result).toBeCloseTo(23.15, 2); // Expected BMI value with 2 decimal places
});

// Test case 2: Calculate BMI with imperial units
test('Calculate BMI with imperial units', () => {
  // Arrange
  const height = 70; // in inches
  const weight = 150; // in pounds

  // Act
  const result = calculateBMI(height, weight, 'in', 'lb');

  // Assert
  expect(result).toBeCloseTo(21.52, 2); // Expected BMI value with 2 decimal places
});