// MENU
const menuBtn = document.getElementById("menu-btn");

menuBtn.onclick = () => {
    let menu = document.getElementById("menu");

    let menuStatus = menu.className;

    if (menuStatus != "menu close" || menuStatus.includes("an")) return;

    menu.className = "menu";
    menu.style.animation = "mOpen 0.5s ease";

    document.body.style.overflow = "hidden";
}

window.onclick = event => screenClickEvent(event);
window.ontouchend = event => screenClickEvent(event);

function screenClickEvent(event) {
    let menu = document.getElementById("menu");

    let menuStatus = menu.className;

    if (menuStatus != "menu") return;
    if (event.path[0] == menu || event.path[1] == menu || event.path[0] == menuBtn || event.path[0] == menuBtn.children[0]) return;

    menu.style.animation = "mClose 0.5s ease";
    menu.className = "menu an";

    setTimeout(() => {
        menu.className = "menu close";
        document.body.style.overflow = "auto";
    }, 480)
}

// LOADING
const loading = document.getElementById("loading");
let loaded = false;
let time = 0;
const loadingTime = 1;
document.body.style.overflow = "hidden";

const int = setInterval(() => {
    if (time >= loadingTime && loaded) {
        loading.style.animation = "loaded 0.5s ease";
        setTimeout(() => {
            loading.style.display = "none";
            document.body.style.overflow = "auto";
        }, 480)
    } else {
        time += 0.5;
    }
}, 500)

window.onload = () => {
    loaded = true;
}

// COPY IP
const ipText = document.getElementById("ip-text");

function copy(text) {
    const temp = document.createElement('textarea');
    temp.value = text;

    document.body.appendChild(temp);

    temp.select();
    document.execCommand('copy');

    document.body.removeChild(temp);

    const startText = ipText.innerText;
    ipText.innerText = "IP Copiato";

    setTimeout(() => {
        ipText.innerText = startText;
    }, 3000)
}
