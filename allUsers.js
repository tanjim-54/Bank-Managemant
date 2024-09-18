let body=document.querySelector('.adding2');

let basket = JSON.parse(localStorage.getItem("data")) || [];

let val=basket.map( (x) => {

    return (`
        <div> Name : ${x.name} </div>
        <div> ID : ${x.id} </div>
        <div> Amount : ${x.amount} </div>
    `)
}).join('----------------------------------------');

body.innerHTML+=val;

