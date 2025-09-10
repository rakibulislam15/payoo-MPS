
// step-1 : add event hamdler 
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault(); 

        // step-2 : how to add money

        const addMoney = document.getElementById('amount').value;
        // console.log(addMoney);

        // get the pin number 
        const pinNumbers = document.getElementById('pin').value;
        // console.log(pinNumbers);


        // step-3 : verify pin number / validation 
        if (pinNumbers === "1234") {
            // console.log('adding money to your account');
            // step-4 : new amount and current amonunt sum 
            const balance = document.getElementById("balance").innerText;
            // console.log(typeof balance);

            // step-5 : add update blance 
            const money = parseFloat(addMoney);
            const blanceNumber = parseFloat(balance)
            const newBlance = money + blanceNumber;
            // console.log(newBlance);

            // step-6 : show a new blamce 
            document.getElementById("balance").innerText = newBlance;



        } else {
            alert('Failed to add money ! Please try again')
        }



    })