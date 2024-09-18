let body=document.querySelector('.adding');
let bt = document.getElementById('submit');
let num1 = document.getElementById('inputFieldid1');
let num2 = document.getElementById('inputFieldid2');
let money = document.getElementById('inputFieldamount');

let basket = JSON.parse(localStorage.getItem("data")) || [];

bt.addEventListener( 'click', function(){

    if(Number(num1.value)>basket.length || Number(num2.value)>basket.length)
    {
        alert("Invalid ID, try again !!");
    }
    else
    {
        newAdd = Number(basket[Number(num2.value)-1].amount)+Number(money.value);
        newRemove = Number(basket[Number(num1.value)-1].amount)-Number(money.value);

        if(newRemove<0)
        {
            alert("Insufficient Balance !!");
        }

        else
        {
            let userList1 = JSON.parse(localStorage.getItem(Number(num1.value))) || [];
            let userList2 = JSON.parse(localStorage.getItem(Number(num2.value))) || [];

            body.innerHTML=`
                <div> Money transfered successfully !!</div>
                <div style="text-decoration : underline"> From</div>
                <div> Account Name : ${basket[Number(num1.value)-1].name} </div>
                <div> Account ID : ${basket[Number(num1.value)-1].id} </div>
                <div> Previous amount : ${basket[Number(num1.value)-1].amount} </div>
                <div> Transfered amount : ${money.value} </div>
                <div> Current amount : ${newRemove} </div>
                <div style="text-decoration : underline"> To</div>
                <div> Account Name : ${basket[Number(num2.value)-1].name} </div>
                <div> Account ID : ${basket[Number(num2.value)-1].id} </div>
                <div> Previous amount : ${basket[Number(num2.value)-1].amount} </div>
                <div> Newly added amount : ${money.value} </div>
                <div> Current amount : ${newAdd} </div>
            `

            basket[Number(num1.value)-1].amount=String(newRemove);
            basket[Number(num2.value)-1].amount=String(newAdd);
            localStorage.setItem("data", JSON.stringify(basket));

            userList1.push(`Money transfered to Account No ${Number(num2.value)} , amount : ${Number(money.value)}`);
            localStorage.setItem(Number(num1.value), JSON.stringify(userList1));

            userList2.push(`Money transfered from Account No ${Number(num1.value)} , amount : ${Number(money.value)}`);
            localStorage.setItem(Number(num2.value), JSON.stringify(userList2));
        }
    }

})