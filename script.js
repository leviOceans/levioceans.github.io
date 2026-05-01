// ====== TÍTULO COM DIGITAÇÃO ======
const titleText = "Developer & Oceanography & Technology";
const titleElement = document.getElementById("title-text");
const cursor = document.querySelector(".cursor");
let i = 0;

function typeTitle() {
    if (!titleElement || !cursor) {
        return;
    }

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

if (titleElement && cursor) {
    typeTitle();
}

// ====== FADE-IN DA BIO E BOTÃO ======
function showBio() {
    const first = document.getElementById("first-bio");
    const second = document.getElementById("second-bio");
    if (!first || !second) {
        return;
    }
    // Mostra primeiro bloco
    first.classList.add("visible");

    // Mostra segundo bloco após 1.2s
    setTimeout(() => {
        second.classList.add("visible");
    }, 1200);

    // Mostra botão após 2.4s (logo depois do segundo bloco)
        setTimeout(() => {
                const projectsBtn = document.getElementById("projects-btn");
                const curriculoBtn = document.getElementById("curriculo-btn");
                if (projectsBtn) projectsBtn.classList.add("visible");
                if (curriculoBtn) curriculoBtn.classList.add("visible");
        }, 2400);
}
// ====== MENSAGEM DIVERTIDA AO CLICAR NO BOTÃO ======
const projectsBtn = document.getElementById("projects-btn");
const curriculoBtn = document.getElementById("curriculo-btn");
const message = document.getElementById("message");
const themeButtons = document.querySelectorAll("[data-theme-toggle]");

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    themeButtons.forEach((button) => {
        const isDark = theme === "dark";
        button.textContent = isDark ? "☀" : "☾";
        button.setAttribute("aria-label", isDark ? "Mudar para tema claro" : "Mudar para tema escuro");
        button.setAttribute("aria-pressed", String(!isDark));
    });
}

const savedTheme = localStorage.getItem("site-theme") || document.documentElement.getAttribute("data-theme") || "dark";
applyTheme(savedTheme);

themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        localStorage.setItem("site-theme", nextTheme);
        applyTheme(nextTheme);
    });
});

if (projectsBtn) {
    projectsBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "projetos.html";
    });
}

if (curriculoBtn) {
    curriculoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "curriculo.html";
    });
}
