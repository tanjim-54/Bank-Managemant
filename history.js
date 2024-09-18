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
        let k=num.value;
        let userList= JSON.parse(localStorage.getItem(k)) || [];

        userList.forEach( (x)=>{
                body.innerHTML+=`
                <div> ${x} </div>
                `
        }
        )
    }
})
