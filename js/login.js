


document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;  
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;  
    console.log(password);

    if(email === 'nayeem@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Vuul password no maris, ak side a ja')
    }

})

