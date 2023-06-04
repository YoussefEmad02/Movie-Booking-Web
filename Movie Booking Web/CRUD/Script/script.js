var productName = document.getElementById('name')
var productPrice = document.getElementById('price')
var productCategory = document.getElementById('cat')
var productDescription = document.getElementById('desc')
var addProduct = document.getElementById('addBtn')
var updateBtn = document.getElementById('updateBtn')
var searchInput = document.getElementById('search')
var productsContainer = []
var hide = document.getElementById("none")


var productName_pattern = /^[a-zA-Z]{3,50}$/
var price_pattern = /^[0-9]{1,3}$/
var category_pattern = /^Action|Racing|horror$/
var description_pattern = /^[a-zA-z]{0,55}$/
var e1, e2, e3, e4;




if (localStorage.getItem('products') != null) {
    productsContainer = JSON.parse(localStorage.getItem('products'))
    displayData()
}

addProduct.addEventListener('click', function () {

    validation();


    if (e1 == true && e2 == true && e3 == true && e4 == true) {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            description: productDescription.value
        }
        productsContainer.push(product);
        localStorage.setItem('products', JSON.stringify(productsContainer))


        displayData()
        clearData()
    } else {
        console.log("Error")
    }

})



function displayData() {
    var hamada = ``
    for (var i = 0; i < productsContainer.length; i++) {
        hamada += `<tr>
        <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p></th>
        <td> <p id='priceProduct'>${productsContainer[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
        <td> <p id='catProduct'>${productsContainer[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
        <td> <p id='descProduct'>${productsContainer[i].description}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
        <td><button class="btn btn-outline-danger hide"onclick ="deleteData(${i})" >Delete</button></td> 
        <td><button class="btn btn-outline-warning hide" id='updatebttn' onclick="updateData(${i})" >Update</button>
        <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button></td>
        </tr>`
    }

    document.getElementById('info').innerHTML = hamada
}


function clearData() {
    productName.value = ``
    productPrice.value = ``
    productCategory.value = ``
    productDescription.value = ``
}


function deleteData(indexed) {
    productsContainer.splice(indexed, 1)
    localStorage.setItem('products', JSON.stringify(productsContainer))
    displayData()
}

var x;
function updateData(indexed) {
    x = indexed
    productName.value = productsContainer[indexed].name
    productPrice.value = productsContainer[indexed].price
    productCategory.value = productsContainer[indexed].category
    productDescription.value = productsContainer[indexed].description
    updateBtn.classList.toggle('show')
    addProduct.classList.toggle('show')

}

function validation(){
    if (productName_pattern.test(productName.value) == false) {
        productName.nextElementSibling.innerHTML = `*Product Name Not Valid`
        e1 = false
    } else {
        productName.nextElementSibling.innerHTML = ``
        e1 = true
    }

    if (price_pattern.test(productPrice.value) == false) {
        productPrice.nextElementSibling.innerHTML = `*Price must be less than 1000$`
        e2 = false
    } else {
        productPrice.nextElementSibling.innerHTML = ``
        e2 = true
    }


    if (category_pattern.test(productCategory.value) == false) {
        productCategory.nextElementSibling.innerHTML = `*Choose from Action , Racing , Horror`
        e3 = false
    } else {
        productCategory.nextElementSibling.innerHTML = ``
        e3 = true
    }

    if (description_pattern.test(productDescription.value) == false) {
        productDescription.nextElementSibling.innerHTML = `*You can't use numbers or sympols`
        e4 = false
    } else {
        productDescription.nextElementSibling.innerHTML = ``
        e4 = true
    }
    return e1,e2,e3,e4
}

updateBtn.addEventListener('click', function () {

    validation();


    if (e1 == true && e2 == true && e3 == true && e4 == true) {
        productsContainer[x].name = productName.value
        productsContainer[x].price = productPrice.value
        productsContainer[x].category = productCategory.value
        productsContainer[x].description = productDescription.value
        localStorage.setItem('products', JSON.stringify(productsContainer))
        updateBtn.classList.toggle('show')
        addProduct.classList.toggle('show')
        displayData()
        clearData()
        }
        // productsContainer.push(product);
        // localStorage.setItem('products', JSON.stringify(productsContainer))




})



searchInput.addEventListener('input', function () {
    // console.log('hello');
    var hamada = ``
    var searchValue = searchInput.value
    for (var i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].name[0].toLowerCase().includes(searchValue.toLowerCase()) == true) {
            hamada += `<tr>
            <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
            <th scope="row"> <p id='nameProduct'> ${productsContainer[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
            <td> <p id='priceProduct'>${productsContainer[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
            <td> <p id='catProduct'>${productsContainer[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
            <td> <p id='descProduct'>${productsContainer[i].description}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
            <td><button class="btn btn-outline-danger"onclick ="deleteData(${i})" >Delete</button></td> 
            <td><button class="btn btn-outline-warning" id='updatebttn' onclick="updateData(${i})" >Update</button>
            <button class="btn btn-outline-success px-3 show" id='savebtn'>Save</button></td>
            </tr>`
        }
        document.getElementById('info').innerHTML = hamada
    }

})


var position = JSON.parse(localStorage.getItem('position'))

// if(position.position=="0"){
//     hide.style.display="none"
// }