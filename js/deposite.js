document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeField =document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    
     const newDepositeAmount = parseFloat(newDepositeAmountString);




    const depositeTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositeTotalElement.innerText;
            
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositeTotal = previousDepositTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositeField.value = '';
})


