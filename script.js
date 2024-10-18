function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        const message = getBMICategory(bmi);
        document.getElementById('result').innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>${message}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
    } else {
        return 'Obesity';
    }
}

