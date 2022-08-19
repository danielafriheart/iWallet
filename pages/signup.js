let allAccount;
createNewUser = () => {
    let newUserAsset = {
        accountName: names.value,
        accountEmail: email.value,
        accountPassword: password.value,
        accountAddress: address.value + ", " + city.value + ", " + state.value,
        accountBalance: 10000,
        accountNo: Math.floor(Math.random() * 100000000000),
        transactionList: [],
    }
    let allAccount = JSON.parse(localStorage.getItem('registeredAccountList'));
    if (names.value && email.value && password.value) {
        if (!localStorage.getItem('registeredAccountList')) {
            allAccount = [];
        } else {
            allAccount
        }
        let existingMail = allAccount.find((val) => val.accountEmail == email.value);
        if (existingMail) {
            alert("Existing User Email")
            return;
        }
        allAccount.push(newUserAsset)
        console.log(allAccount);

        localStorage.setItem('registeredAccountList', JSON.stringify(allAccount))
        location.href = '/pages/signin.html';
    }
    else {
        alert("Fill the empty spaces");
    }
    // alert('Gbemi debe!!')
}