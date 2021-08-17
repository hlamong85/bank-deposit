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






    // console.log(showTextAmount);
})