function TogglePassword(password, toggle){
    toggle.addEventListener('click', () => {
        if(password.type === 'password'){
            password.type = 'text'
        }else{
            password.type = 'password';
        }
    })
}