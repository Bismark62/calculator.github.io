function calculateFutureValue() {
    const principal = parseFloat(document.getElementById('principal').value);
    const monthlyInvestment = parseFloat(document.getElementById('monthlyInvestment').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(monthlyInvestment) || isNaN(rate) || isNaN(years) || principal <= 0 || monthlyInvestment < 0 || rate < 0 || years <= 0) {
        document.getElementById('result').textContent = "Please enter valid input values.";
        return;
    }

    const monthlyRate = rate / 12;
    const totalMonths = years * 12;

    let futureValue = principal * Math.pow(1 + monthlyRate, totalMonths);

    for (let i = 1; i <= totalMonths; i++) {
        futureValue += monthlyInvestment * Math.pow(1 + monthlyRate, totalMonths - i);
    }

    document.getElementById('result').textContent = `Future Value: $${futureValue.toFixed(2)}`;
}
