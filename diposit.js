let body=document.querySelector('.adding');
let bt = document.getElementById('submit');
let num = document.getElementById('inputFieldid');
let money = document.getElementById('inputFieldamount');

let basket = JSON.parse(localStorage.getItem("data")) || [];

bt.addEventListener( 'click', function(){

    if(Number(num.value)>basket.length)
    {
        alert("Invalid ID, try again !!");
    }

    else
    {
        let userList = JSON.parse(localStorage.getItem(Number(num.value))) || [];

        newAdd = Number(basket[Number(num.value)-1].amount)+Number(money.value);

        body.innerHTML=`
            <div> Account Name : ${basket[Number(num.value)-1].name} </div>
            <div> Account ID : ${basket[Number(num.value)-1].id} </div>
            <div> Previous amount : ${basket[Number(num.value)-1].amount} </div>
            <div> Newly added amount : ${money.value} </div>
            <div> Current amount : ${newAdd} </div>
        `

        userList.push(`Money deposited, amount : ${Number(money.value)}`);
        basket[Number(num.value)-1].amount=String(newAdd);
        localStorage.setItem("data", JSON.stringify(basket));
        localStorage.setItem(Number(num.value), JSON.stringify(userList));
    }
})