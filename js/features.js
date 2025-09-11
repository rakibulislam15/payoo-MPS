// console.log('let add the feature');
// show the cash out btn \\
document.getElementById("btn-show-cash-out").addEventListener('click',function(){

    console.log("brn show");
    
    document.getElementById("cash-out-from").classList.remove('hidden');

    document.getElementById('add-money-from').classList.add('hidden')
})


/// show add money form and hind the cash out form

document.getElementById('add-money-btn-show').addEventListener('click',function(){
    document.getElementById('add-money-from').classList.remove('hidden')
    document.getElementById('cash-out-from').classList.add('hidden'); 
})