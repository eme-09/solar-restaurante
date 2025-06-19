window.addEventListener("scroll", revealOnScroll);

function revealOnScroll() {
    const elementos = document.querySelectorAll(".producto");

    elementos.forEach((elemento) => {
        const elementoTop = elemento.getBoundingClientRect().top;
        if (elementoTop < ventanaAltura) {
            elemento.classList.add("reveal");
        }
    });
}
