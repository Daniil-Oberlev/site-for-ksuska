document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".noButton").addEventListener("mouseover", moveButton);
  
  document.querySelector(".yesButton").addEventListener("click", function () {
    const headerText = document.querySelector(".header_text");
    const img = document.querySelector("img");
    const buttonsContainer = document.querySelector(".buttons");

    headerText.textContent = "Объявляю вас мужем и женой!!!";
    img.src = "https://i.postimg.cc/L6MNqwVn/sticke-r.gif";
    img.alt = "два миленьких котика обнимаются";
    buttonsContainer.style.display = "none";
  });

  function moveButton() {
    const button = document.querySelector(".noButton");
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  }
});
