// Import the function to be tested
const { calculateBMI } = require('./bmiCalculator');

// Test case 1: Calculate BMI with metric units
test('Calculate BMI with metric units', () => {
  // Arrange
  const height = 180; // in centimeters
  const weight = 75; // in kilograms

  // Act
  const result = calculateBMI(height, weight);

  // Assert
  expect(result).toBeCloseTo(23.15, 2); // Expected BMI value with 2 decimal places
});

// Test case 2: Calculate BMI with imperial units
test('Calculate BMI with imperial units', () => {
  // Arrange
  const height = 70; // in inches
  const weight = 150; // in pounds

  // Act
  const result = calculateBMI(height, weight);

  // Assert
  expect(result).toBeCloseTo(21.52, 2); // Expected BMI value with 2 decimal places
});