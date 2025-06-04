const titles = ["Data Scientist", "Machine Learning Engineer", "AI Developer"];
let index = 0;
let charIndex = 0;
const typingText = document.querySelector(".typing-text");

function type() {
    if (charIndex === 0) {
        typingText.textContent = "";
    }

    if (charIndex < titles[index].length) {
        typingText.textContent += titles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % titles.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (titles.length) setTimeout(type, 1000);
});
