function calculateTrip() {
    const fuelCapacity = parseFloat(document.getElementById('fuelCapacity').value);
    const totalDistance = parseFloat(document.getElementById('totalDistance').value);
    const startingRange = parseFloat(document.getElementById('startingRange').value);
    const consumptionRate = parseFloat(document.getElementById('consumptionRate').value);
    const costPerLitre = parseFloat(document.getElementById('costPerLitre').value);

    if (isNaN(fuelCapacity) || isNaN(totalDistance) || isNaN(startingRange) || isNaN(consumptionRate) || isNaN(costPerLitre)) {
        alert('Please enter valid values for all fields. 🙏');
        return;
    }

    const fuelNeeded = (totalDistance / 100) * consumptionRate;
    const initialFuelRange = (startingRange / 100) * consumptionRate; // Calculate the initial fuel range in litres
    const additionalFuelNeeded = fuelNeeded - initialFuelRange; // Fuel needed beyond the initial range
    const stopsNeeded = Math.ceil(additionalFuelNeeded / fuelCapacity);
    const totalCost = fuelNeeded * costPerLitre;

    const resultsText = `
        Total fuel needed: ${fuelNeeded.toFixed(2)} litres
        Total number of refueling stops: ${stopsNeeded}
        Total cost of the trip: ${totalCost.toFixed(2)}
    `;

    document.getElementById('resultsText').textContent = resultsText;
    document.getElementById('results').classList.remove('hidden');
}
