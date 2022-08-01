// document.getElementById('lion').style.color = "red"
// document.getElementById('tiger').style.color = "green"
// document.getElementById('bear').style.color = "blue"

// document.getElementsByTagName('li')[0].style.color = "red"
// document.getElementsByTagName('li')[1].style.color = "green"
// document.getElementsByTagName('li')[2].style.color = "blue"

// document.getElementsByClassName('animal')[0].style.color = "red"
// document.getElementsByClassName('animal')[1].style.color = "green"
// document.getElementsByClassName('animal')[2].style.color = "blue"

// document.querySelectorAll('.animal')[0].style.color = "red"
// document.querySelectorAll('.animal')[1].style.color = "green"
// document.querySelectorAll('.animal')[2].style.color = "blue"

// document.querySelectorAll('.animal')[1].innerHTML = 'dog'

const animals = document.getElementById('animals')
animals.innerHTML += '<li class="animal">cat</li>';

document.querySelectorAll(".box")[0].classList.add("purple")

document.querySelectorAll(".box")[0].classList.remove("purple")

document.querySelectorAll(".box")[0].classList.toggle("yellow")

document.querySelectorAll(".box")[0].classList.toggle("yellow")