



document.getElementById('btn-withdraw').addEventListener('click', function(){
     const withdrawField = document.getElementById('withdraw-field');
     const newwithDrawAmountString = withdrawField.value;
     const newWithDrawAmount = parseFloat(newwithDrawAmountString);

     const withdrawtotalElement = document.getElementById('withdraw-total');
     const previousWithdrawTotalString = withdrawtotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);


  const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  withdrawtotalElement.innerText = currentWithdrawTotal;

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
     
    previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value ='';

})