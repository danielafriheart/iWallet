let profile = JSON.parse(localStorage.getItem('currentUser'));
userName.innerHTML = profile.accountName
userEmail.innerHTML = profile.accountEmail
userPassword.innerHTML = profile.accountPassword
userAddress.innerHTML = profile.accountAddress