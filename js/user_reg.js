{
    const nameOfPerson = document.querySelector('#name');
    const nameError = document.querySelector('#text-error');
    nameOfPerson.addEventListener('input', function(){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if(nameRegex.test(nameOfPerson.value))
          nameError.textContent = "";
        else nameError.textContent = "Name is incorrect";
    });

}