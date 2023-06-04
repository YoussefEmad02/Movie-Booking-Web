var productsContainer = []
var searchInput = document.getElementById('search')
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')
const movieName = document.getElementById('movie')
const moviePrice = document.getElementById('price1')
const seats = document.getElementById('seats')
const bookBt = document.getElementById('book')
let totalPrice = 0;
let unitPrice = 0;
let sum = 0;
let booked=[];


if (localStorage.getItem('products') != null) {
    productsContainer = JSON.parse(localStorage.getItem('products'))
    displayData()
}




function displayData() {
    var hamada = ``
    for (var i = 0; i < productsContainer.length; i++) {
        hamada += `<tr>
        <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p></th>
        <td> <p id='priceProduct'>${productsContainer[i].price}$</p></td>
        <td> <p id='catProduct'>${productsContainer[i].category}</p></td>
        <td> <p id='descProduct'>${productsContainer[i].description}</p></td>
        <td><button class="btn btn-outline-danger hide"onclick ="showData(${i})" >Book</button></td> 
        </tr>`
    }

    document.getElementById('info').innerHTML = hamada
}

displayData();

searchInput.addEventListener('input', function () {
    // console.log('hello');
    var hamada = ``
    var searchValue = searchInput.value
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name[0].toLowerCase().includes(searchValue.toLowerCase()) == true) {
            hamada += `<tr>
            <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p></th>
            <td> <p id='priceProduct'>${productsContainer[i].price}$</p></td>
            <td> <p id='catProduct'>${productsContainer[i].category}</p></td>
            <td> <p id='descProduct'>${productsContainer[i].description}</p></td>
            <td><button class="btn btn-outline-danger hide"onclick ="showData(${i})" >Book</button></td> 
            </tr>`
        }
        document.getElementById('info').innerHTML = hamada
    }

})

function showData(indexed) {
    console.log(productsContainer[indexed].name);
    movieName.innerHTML=productsContainer[indexed].name;
    moviePrice.innerHTML=productsContainer[indexed].price+'$';
    unitPrice = productsContainer[indexed].price;
}


open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})


for(let i = 0; i<35 ; i++){
    seats.innerHTML+=`<button id="seat${i+1}" onclick ="book(${i+1})""></button>`
}
console.log("hi");
function book(index){
    if (unitPrice==0) {
        nav.forEach(nav_el => nav_el.classList.add('visible'))
        moviePrice.innerHTML="Select the movie you want";

    }else{
        booked.push(index);
        document.getElementById(`seat${index}`).style.backgroundColor='green';
        sum++
        totalPrice=sum*unitPrice
        console.log(totalPrice);
        moviePrice.innerHTML=`The total cost for ${sum} seats = ${totalPrice}$`
    }
    console.log(booked);
}

movieName.onclick=function(){
    console.log("tes");
    nav.forEach(nav_el => nav_el.classList.add('visible'))
}

bookBt.onclick= function(){
    if (unitPrice==0) {
        nav.forEach(nav_el => nav_el.classList.add('visible'))
        moviePrice.innerHTML="Select the movie you want";
    }else if (totalPrice==0){
        alert("Please select The seats")
    }else {
        alert(`The total cost for ${sum} seats is ${totalPrice}$ Thanks for choosing our cinema`)
        window.location.reload();
    }
}