
// Step-1: Add event listener to the deposit button
document. getElementById('btn-deposit'). addEventListener('click', function(){
    // Step-2: Get the amount from the deposit input field
    // for input and textArea use .vlue to get the value.
    const depositField = document. getElementById('deposit-field');
    const depositAmount = depositField. value;
    // Step-3: Get the current deposit total
    // for non-input (element other than im=nput,textarea) use .innerTexrt to get the text
    const depositTotalElement = document. getElementById('deposit-total');
    const depositTotal = depositTotalElement. innerText;
    depositTotalElement. innerText = depositAmount;
})