login = () => {
    let local = JSON.parse(localStorage.getItem('registeredAccountList'))
    // console.log(local);
    if (mail.value && pass.value) {
        let authentication = local.find((val) => val.accountEmail == mail.value && val.accountPassword == pass.value);
        
        if (authentication) {
            let user = JSON.stringify(authentication);
            localStorage.setItem('currentUser', user);
            location.href = '/pages/dashboard.html';
            return;
        }
        else {
            alert('Incorrect Email or Password');
        }
    }
    else {
        alert('Input Login Info')
    }
}