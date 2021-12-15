
export { };

const calcTotalCharge = (totalDistance: number, amount: number) => totalDistance * amount;

const getTaxiCharges = (totalDistance: number) => {
    let totalCharges: number;
    if (totalDistance >= 0 && totalDistance < 2) {
        totalCharges = 50;
        console.log(`Total Charges:- ₹${totalCharges}`);
    } else if (totalDistance >= 2 && totalDistance < 5) {
        totalCharges = calcTotalCharge(totalDistance, 20);
        console.log(`Total Charges:- ₹${totalCharges.toFixed(2)}`);
    } else if (totalDistance >= 5 && totalDistance <= 15) {
        totalCharges = calcTotalCharge(totalDistance, 18);
        console.log(`Total Charges:- ₹${totalCharges.toFixed(2)}`);
    } else if (totalDistance > 15) {
        totalCharges = calcTotalCharge(totalDistance, 15);
        console.log(`Total Charges:- ₹${totalCharges.toFixed(2)}`);
    } else {
        console.log('Enter valid distance');
    }
}

getTaxiCharges(5);
