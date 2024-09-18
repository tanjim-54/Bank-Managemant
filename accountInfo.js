let body=document.querySelector('.adding');
let bt = document.getElementById('submit');
let num = document.getElementById('inputFieldnumber');

let basket = JSON.parse(localStorage.getItem("data")) || [];

bt.addEventListener( 'click', function(){

    if(Number(num.value)>basket.length)
    {
        alert("Invalid ID, try again !!");
    }
    else
    {
        body.innerHTML=`
        <div> Name : ${basket[Number(num.value)-1].name} </div>
        <div> ID : ${basket[Number(num.value)-1].id} </div>
        <div> Amount : ${basket[Number(num.value)-1].amount} </div>
    `
    }
})
