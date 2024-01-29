function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.querySelector(".noButton");
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
document.querySelector(".yesButton").addEventListener("click", nextPage);
document.querySelector(".noButton").addEventListener("mouseover", moveButton);
