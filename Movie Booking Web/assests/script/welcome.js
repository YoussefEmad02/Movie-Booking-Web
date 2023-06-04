var userLoggedIn = JSON.parse(localStorage.getItem('userLoggedIn'))
document.getElementById('title').innerHTML += userLoggedIn.name