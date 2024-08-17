// Aquí puedes incluir el script proporcionado.
function mostrarAviso(mensaje) {
    const aviso = document.querySelector(".texto-aviso");
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;
    
    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/mg, "enter")
        .replace(/i/mg, "imes")
        .replace(/a/mg, "ai")
        .replace(/o/mg, "ober")
        .replace(/u/mg, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/mg, "e")
        .replace(/imes/mg, "i")
        .replace(/ai/mg, "a")
        .replace(/ober/mg, "o")
        .replace(/ufat/mg, "u");
}

function validarTexto(texto) {
    const txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:";,\u0300-\u036f']/g, "");
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
        return false;
    }
    if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
        return false;
    }
    if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return false;
    }
    return true;
}

document.querySelector(".btn-encriptar").addEventListener("click", e => {
    e.preventDefault();
    let texto = document.querySelector(".encriptar").value;
    if (validarTexto(texto)) {
        texto = encriptarTexto(texto);
        document.querySelector(".evaluar").innerHTML = texto;
        document.querySelector(".btn-copiar").style.visibility = "inherit";
        document.querySelector(".tarjeta-contenedor")?.remove(); 
    }
});

document.querySelector(".btn-desencriptar").addEventListener("click", e => {
    e.preventDefault();
    let texto = document.querySelector(".encriptar").value;
    if (validarTexto(texto)) {
        texto = desencriptarTexto(texto);
        document.querySelector(".evaluar").innerHTML = texto;
        document.querySelector(".btn-copiar").style.visibility = "inherit";
        document.querySelector(".tarjeta-contenedor")?.remove(); 
    }
});

document.querySelector(".btn-copiar").addEventListener("click", e => {
    e.preventDefault();
    navigator.clipboard.writeText(document.querySelector(".evaluar").innerText).then(() => {
        mostrarAviso("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar texto: ", err);
    });
});

function toggleDarkMode() {
    const sunMoon = document.getElementById('sunMoon');
    const switchLabel = document.getElementById('switchLabel');
    document.body.classList.toggle('dark-mode');
    sunMoon.style.opacity = 1;
    setTimeout(() => {
        sunMoon.style.opacity = 0;
    }, 1000);
    if (document.body.classList.contains('dark-mode')) {
        switchLabel.textContent = 'Cambiar a modo claro';
    } else {
        switchLabel.textContent = 'Cambiar a modo oscuro';
    }
}