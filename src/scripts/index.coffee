moveButton = ->
  button = document.querySelector(".noButton")
  x = Math.random() * (window.innerWidth - button.offsetWidth)
  y = Math.random() * (window.innerHeight - button.offsetHeight)

  button.style.left = "#{x}px"
  button.style.top = "#{y}px"

document.addEventListener "DOMContentLoaded", ->
  document.querySelector(".noButton").addEventListener "mouseover", moveButton

  document.querySelector(".yesButton").addEventListener "click", ->
    headerText = document.querySelector(".header_text")
    img = document.querySelector("img")
    buttonsContainer = document.querySelector(".buttons")

    headerText.textContent = "Объявляю вас мужем и женой!!!"
    img.src = "https://i.postimg.cc/L6MNqwVn/sticke-r.gif"
    img.alt = "два миленьких котика обнимаются"
    buttonsContainer.style.display = "none"
