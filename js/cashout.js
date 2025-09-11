
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out money');

        const cashOut = document.getElementById('cash-out').value;
         const cashOutNumber = parseFloat(cashOut)
        const cashOutPin = document.getElementById('cash-out-pin').value;
     
        if(cashOutPin === "1234"){
            const balance = document.getElementById("balance").innerText; 
            console.log(balance);
            const blanceNumber = parseFloat(balance)
            
            const newBlance = blanceNumber - cashOutNumber
            document.getElementById("balance").innerText = newBlance
         }else{
            alert("please Enter a valid number And Pin code ")
        }
        
        
        
    })
