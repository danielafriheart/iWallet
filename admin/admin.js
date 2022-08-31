let allAdmin = [];
createNewAdmin = () => {
    // alert('hellooooo')
    let newAdminAsset = {
        firstName: fName.value,
        lastName: lName.value,
        adminName: fName.value + " " + lName.value,
        adminCity: city.value,
        adminState: state.value,
        adminZip: zipCode.value,
        adminLocation: city.value + state.value + ", " + zipCode.value,
        adminUserNAme: userName.value,
        adminPassword: password.value
    }
    allAdmin.push(newAdminAsset)
    console.log(allAdmin);
}