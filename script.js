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

const sunIconMarkup = `
    <svg class="theme-icon theme-icon--sun" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4l1.4-1.4M18 6l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>
`;

const moonIconMarkup = `
    <svg class="theme-icon theme-icon--moon" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 13.2A8.5 8.5 0 1 1 10.8 3a7 7 0 0 0 10.2 10.2Z" fill="currentColor"/>
    </svg>
`;

function updateThemeButton(button, theme) {
    const isDark = theme === "dark";

    button.innerHTML = isDark ? sunIconMarkup : moonIconMarkup;

    button.setAttribute("aria-label", isDark ? "Mudar para tema claro" : "Mudar para tema escuro");
    button.setAttribute("aria-pressed", String(!isDark));
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);

    themeButtons.forEach((button) => {
        updateThemeButton(button, theme);
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
