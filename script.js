const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 80) - 40;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function yesClicked() {
    document.getElementById("message").innerHTML =
        "YAY!!! 💖🥰<br>You just made my heart so happy 💕<br>Happy Valentine’s Day! ❤️";
}
