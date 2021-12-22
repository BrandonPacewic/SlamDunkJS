function calculateBill(bill, taxRate) {
    console.log('Running');
    const total = bill * taxRate;
    return total;
}

const total = calculateBill(100, 1.13);
const total2 = calculateBill(150, 1.15);

console.log(total, total2);