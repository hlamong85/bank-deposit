document.getElementById('deposit').addEventListener('click', function () {
    const deposit = document.getElementById('deposit-amount');
    const depositAmount = deposit.value;
    console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;
    // clear the deposit amount
    deposit.value = '';
})