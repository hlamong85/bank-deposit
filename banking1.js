document.getElementById('deposit').addEventListener('click', function () {
    console.log('button clicked');
    //get the amount deposited
    const depositInput = document.getElementById('deposit-amount');

    const showDepositText = depositInput.value;
    const showDepositAmount = parseFloat(showDepositText);
    console.log(showDepositAmount);

    //show deposit
    const depositText = document.getElementById('deposit-total');
    //const showTextAmount = depostTextAmount.innerText;

    const currentDepositText = depositText.innerText;
    const currentDepositAmount = parseFloat(currentDepositText);
    //add current amout and input current amount
    const newDepositCurrentAmount = showDepositAmount + currentDepositAmount;
    depositText.innerText = newDepositCurrentAmount;
    // depositText.innerText = showDeposit;
    //clear deposit
    depositInput.value = '';
    //update balance total
    const getBalanceText = document.getElementById('balance-total');
    const getBalanceAmount = getBalanceText.innerText;
    const previousBalance = parseFloat(getBalanceAmount);
    const increseBalanceTotal = previousBalance + showDepositAmount;
    getBalanceText.innerText = increseBalanceTotal;









    // console.log(showTextAmount);
});
//withdraw event handler
document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-amount');
    const showWithdraw = withdrawInput.value;
    // console.log(showWithdraw);
    // ...........
    const withdrawText = document.getElementById('withdraw-total');
    const showWithdrawText = withdrawText.innerText;
    console.log(showWithdrawText);//current value;
    const currentwWithdraw = parseFloat(showWithdrawText);
    const previousWithdraw = parseFloat(showWithdraw);
    const getTotalWithdraw = currentwWithdraw + previousWithdraw;
    withdrawText.innerText = getTotalWithdraw;

    // withdrawText.innerText = showWithdraw;//show current text value
    //current amount

    withdrawInput.value = '';
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - getTotalWithdraw;

    balanceTotal.innerText = newBalanceTotal;
    withdrawInput.value = '';












})