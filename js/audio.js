function pronunciar() {
    let palabra = document.getElementById('palabra').value;
    let significadosIngles = ['Apple', 'Mouse', 'Car'];
    let significadosIN = ['Manzana', 'MANZANA', 'manzana', 'Ratón', 'RATÓN', 'ratón', 'raton', 'RATON', 'Raton', 'carro', 'CARRO', 'Carro'];
    let boton = document.querySelector(".pron");

    if (palabra == significadosIN[0] || palabra == significadosIN[1] || palabra == significadosIN[2]) {
        let boton = document.querySelector(".pron")
        let audioEtiqueta = document.querySelector("audio")

        boton.addEventListener("click", () => {
            audioEtiqueta.setAttribute("src", "audio/apple.m4a")
            audioEtiqueta.play()
            console.log(`Reproduciendo: ${audioEtiqueta.src}`)
        })
    } else {
        alert = "No se pudo reproducir el audio";
    }
}