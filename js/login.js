// console.log('hello');



document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // validation ///
    if (phoneNumber === "45" && pinNumber === "1234") {
        console.log("ok your are a login");
        window.location.href ="/home.html"
    } else {
        alert('please give a valid number and pin');
    }

})