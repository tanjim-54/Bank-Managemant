let bt = document.getElementById('submit');
let name = document.getElementById('inputFieldname');
let amount = document.getElementById('inputFieldamount');
let body=document.querySelector('.adding');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let c = basket.length ? basket[basket.length - 1].id + 1 : 1;

bt.addEventListener('click', function () {

    let userData = {
      id: c,
      name: name.value,
      amount: amount.value
    };

    basket.push(userData);

    let userList = [];

    userList.push(`Account created, deposit amount : ${amount.value}`)

    localStorage.setItem("data", JSON.stringify(basket));
    localStorage.setItem(c, JSON.stringify(userList));

    // alert(
    //     `\nYou account is created! \n\nAccount ID is : ${c}`
    // )

    body.innerHTML=`
        <div> Congrats! Your account is created </div>
        <div> Name : ${basket[Number(c)-1].name} </div>
        <div> ID : ${basket[Number(c)-1].id} </div>
        <div> Amount : ${basket[Number(c)-1].amount} </div>
    `


    c++;

    name.value = "";
    amount.value = "";
});
