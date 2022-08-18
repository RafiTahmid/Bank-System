// 1. Add event handler with the withdraw button
// 2. Get the withdraw amount from withdraw field
// 3. Get previous wthdraw total
// 4. Calculate and set total withdraw amount
// 5. Get the previous balance total
// 6. Calculate and set balance total
// 7. Clear the input field


// Step-1:
document. getElementById('btn-withdraw'). addEventListener('click', function(){
    // Step-2:
    const withdrawField = document. getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField. value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    // step-3:
    const withdrawTotalElement = document. getElementById('withdraw-total');
    const previousWithdrawTotalString =  withdrawTotalElement. innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    // Step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement. innerText = currentWithdrawTotal;

    //Step-5:
    const balanceTotalElement = document. getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    //step-6:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement. innerText = newBalanceTotal;


    //Step-7:
    withdrawField. value = '';
})
