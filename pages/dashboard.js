// For Live toast
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//     toastTrigger.addEventListener('click', () => {
//         const toast = new bootstrap.Toast(toastLiveExample)
//         toast.show()
//     })
// }

let profile = JSON.parse(localStorage.getItem("currentUser"))

logOut = () => {
    localStorage.removeItem('currentUser');
    location.href = '/pages/signin.html';
}
if (profile == null) {
    location.href = '404.html';
} else {
    document.getElementById('balance').innerHTML = profile.accountBalance
    document.getElementById('name').innerHTML = profile.accountName
    document.getElementById('account').innerHTML = profile.accountNo
    accName.innerHTML = profile.accountName

    // FOTR TRANSFER FUNCTIONS
    let transfer = JSON.parse(localStorage.getItem('registeredAccountList'));
    let transferAccount = JSON.parse(localStorage.getItem('currentUser'));
    // openModal = () => { }
    confirm = () => {
        if (recieverAccount.value == transferAccount.accountNo) {
            alert('Invalid Account')
        } else {
            let authy = transfer.find((val) => val.accountNo == recieverAccount.value);

            if (recieverAccount.value && amount.value && note.value) {
                openModal.click();
                cashAmount.innerHTML = amount.value
                recipient.innerHTML = authy.accountName;
            } else {
                alert('Cannot complete this transaction, input complete detail info')
                return;
            };
        }

    }

    sendMoney = () => {
        let auth = transfer.find((val) => val.accountNo == recieverAccount.value);
        let userAccount = transfer.find((val) => val.accountNo == transferAccount.accountNo);

        if (recieverAccount.value && amount.value && note.value) {
            if (amount.value > transferAccount.accountBalance) {
                alert('insufficient funds to complete this transaction')
                return;
            }
            if (amount.value < 10) {
                alert('minimum transfer is $50')
                return;
            } else {
                if (auth) {
                    auth.accountBalance = parseInt(auth.accountBalance) + parseInt(amount.value);
                }
                if (userAccount) {
                    userAccount.accountBalance = parseInt(userAccount.accountBalance) - parseInt(amount.value);
                    transferAccount.accountBalance = parseInt(transferAccount.accountBalance) - parseInt(amount.value);
                }
            }
        } else {
            alert('Cannot complete this transaction, input complete detail info')
            return;
        };

        // For Transactions
        let transactList = {
            sender: userAccount.accountName,
            receiver: auth.accountName,
            cashAmount: amount.value,
            reference: note.value,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }

        transferAccount.transactionList = [...transferAccount.transactionList, transactList];
        userAccount.transactionList = [...userAccount.transactionList, transactList];
        auth.transactionList = [...auth.transactionList, transactList];

        console.log(transferAccount.transactionList);
        console.log(userAccount.transactionList);
        // console.log(auth.transactionList);

        localStorage.setItem('registeredAccountList', JSON.stringify(transfer));
        localStorage.setItem('currentUser', JSON.stringify(transferAccount));
    }

    done = () => {
        location.reload('/pages/dashboard.html');
        // liveToastBtn.click();
    }
    // FOr History
    let transactionLog = JSON.parse(localStorage.getItem('currentUser'));

    let userLog = transactionLog.transactionList;

    for (let i = 0; i < userLog.length; i++) {
        transactionHistory.innerHTML += `<tr><td>${userLog[i].sender}</td><td> $${userLog[i].cashAmount}.00</td><td>${userLog[i].receiver}</td><td>${userLog[i].reference}</td><td>${userLog[i].date}</td></tr>`

        if (transferAccount == profile.name) {
            transHistory[i].innerHTML.classList.add('debit');
        }
        if (transferAccount !== profile.name) {

        }
    }
}