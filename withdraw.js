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

        newRemove = Number(basket[Number(num.value)-1].amount)-Number(money.value);

        if(newRemove<0)
        {
            alert("Insufficient Balance !!");
        }

        else
        {
            body.innerHTML=`
            <div> Account Name : ${basket[Number(num.value)-1].name} </div>
            <div> Account ID : ${basket[Number(num.value)-1].id} </div>
            <div> Previous amount : ${basket[Number(num.value)-1].amount} </div>
            <div> Newly withdraw : ${money.value} </div>
            <div> Current amount : ${newRemove} </div>
            `

            userList.push(`Money withdrawn, amount : ${Number(money.value)}`);
            basket[Number(num.value)-1].amount=String(newRemove);
            localStorage.setItem("data", JSON.stringify(basket));
            localStorage.setItem(Number(num.value), JSON.stringify(userList));
        }
    }

})