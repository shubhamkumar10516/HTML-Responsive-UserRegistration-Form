{
    const nameOfPerson = document.querySelector('#name');
    const nameError = document.querySelector('#nameError');
    nameOfPerson.addEventListener('input', function(){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(nameOfPerson.value))
          nameError.textContent = "";
        else nameError.textContent = "Name is incorrect";
    });

    const emailOfPerson = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    emailOfPerson.addEventListener('input', function(){
        let emailRegex = RegExp('^[A-Z]{1}[a-z]{2,}$^([a-zA-Z]+[a-zA-Z._0-9]*[a-zA-Z0-9]+)[@]([a-zA-Z]{2,}[.][a-zA-Z]{2,}[.][a-zA-Z]{2,})$');
        if(emailRegex.test(emailOfPerson.value))
         emailError.textContent = "";
        else emailError.textContent = "email is incorrect";
    });
    
    const phoneOfPerson = document.querySelector('#phone');
    const phoneError = document.querySelector('#phoneError');
    phoneOfPerson.addEventListener('input', function(){
        let phoneRegex = RegExp('^[0-9]{2}[ ][0-9]{10}$');
        if(phoneRegex.test(phoneOfPerson.value))
         phoneError.textContent = "";
        else phoneError.textContent = "phone number is incorrect";
    });

    const password = document.querySelector('#pwd');
    const pwdError = document.querySelector('#pwdError');
    password.addEventListener('input', function(){
        let pwdRegex = RegExp('^(?=.*[@#$%])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$');
        if(pwdRegex.test(password.value))
         pwdError.textContent = "";
        else pwdError.textContent = "password is incorrect";
    });
}