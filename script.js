const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
    const message = document.getElementById("message");
    const yesBtn = document.querySelector(".yes");

    yesBtn.style.transform = "scale(1.3)";
    yesBtn.innerHTML = "YAY!!! 💖";

    message.innerHTML =
        "💘 She said YES! 💘<br>You just made me the happiest person alive 😍<br>Happy Valentine’s Day ❤️";

    message.style.animation = "pop 0.6s ease forwards";
}
