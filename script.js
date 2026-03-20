// ====== TÍTULO COM DIGITAÇÃO ======
const titleText = "Developer & Oceanography & Technology";
const titleElement = document.getElementById("title-text");
const cursor = document.querySelector(".cursor");
let i = 0;

function typeTitle() {
    if (i < titleText.length) {
        titleElement.textContent += titleText.charAt(i);
        i++;
        setTimeout(typeTitle, 50);
    } else {
        // remove cursor após digitar
        // DEPOIS
        setTimeout(() => {
            cursor.style.animation = "none";
            cursor.style.visibility = "hidden";
        }, 500);

        // mostra a bio
        showBio();
    }
}

typeTitle();

// ====== FADE-IN DA BIO E BOTÃO ======
function showBio() {
    const first = document.getElementById("first-bio");
    const second = document.getElementById("second-bio");
    const btn = document.getElementById("projects-btn");

    // Mostra primeiro bloco
    first.classList.add("visible");

    // Mostra segundo bloco após 1.2s
    setTimeout(() => {
        second.classList.add("visible");
    }, 1200);

    // Mostra botão após 2.4s (logo depois do segundo bloco)
    setTimeout(() => {
        btn.classList.add("visible");
    }, 2400);
}
// ====== MENSAGEM DIVERTIDA AO CLICAR NO BOTÃO ======
const btn = document.getElementById("projects-btn");
const message = document.getElementById("message");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    // message.textContent = "😅 Ops! Ainda estou construindo meus projetinhos...";
    message.textContent = "😅 Oops! Still cooking up my little projects...";
    message.style.opacity = "1";

    // Desaparece após 3 segundos
    setTimeout(() => {
        message.style.opacity = "0";
    }, 3000);
});
