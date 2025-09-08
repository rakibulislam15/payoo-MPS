// console.log('hello');



document.getElementById('login-btn').addEventListener('click',function (event){
     event.preventDefault();
    console.log('btn clicked');

    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
    
})