function calculateBillTotal(preTaxAndTipAmount) {
    let tip = (preTaxAndTipAmount * 15)/100;
    let taxes = (preTaxAndTipAmount * 9.5)/100;
    return preTaxAndTipAmount + tip + taxes;
}
let output = calculateBillTotal(20);
console.log(output); // --> 24.9