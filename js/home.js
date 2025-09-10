// step-1 : add event hamdler 
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        // step-2 : how to add money

        const addMoney = document.getElementById('amount').value;
        console.log(addMoney);

        // get the pin number 
        const pinNumbers = document.getElementById('pin').value;
        console.log(pinNumbers);
        


    })