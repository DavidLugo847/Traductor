let botonElement = document.getElementById("trad");
let pElement = document.getElementById("resultado");
let contador = 1;
let traducir = "";





document.getElementById('cambio').innerHTML = '<p id="aviso">Español   >   Inglés</p>';
traducir = function() {
    let palabra = document.getElementById('palabra').value;
    let significadosIngles = ['Apple', 'Mouse', 'Car'];
    let significadosSpain = ['Manzana', 'MANZANA', 'manzana', 'Ratón', 'RATÓN', 'ratón', 'raton', 'RATON', 'Raton', 'carro', 'CARRO', 'Carro'];

    if (palabra == significadosSpain[0] || palabra == significadosSpain[1] || palabra == significadosSpain[2]) {

        document.getElementById('resultado').value = significadosIngles[0];
    } else {
        if (palabra == significadosSpain[3] || palabra == significadosSpain[4] || palabra == significadosSpain[5] || palabra == significadosSpain[6] || palabra == significadosSpain[7] || palabra == significadosSpain[8]) {

            document.getElementById('resultado').value = significadosIngles[1];
        } else {
            if (palabra == significadosSpain[9] || palabra == significadosSpain[10] || palabra == significadosSpain[11]) {

                document.getElementById('resultado').value = significadosIngles[2];
            } else {
                document.getElementById('resultado').value = 'Lo siento, no se encuentra la palabra';
            }
        }
    }
}




botonElement.onclick = function() {
    contador++;
    pElement.textContent = contador;
    op = contador % 2 == 0;
    switch (op) {
        case op === 0:
            document.getElementById('cambio').innerHTML = '<p id="aviso">Español   >   Inglés </p>';
            traducir = function() {
                let palabra = document.getElementById('palabra').value;
                let significadosIngles = ['Apple', 'Mouse', 'Car'];
                let significadosSpain = ['Manzana', 'MANZANA', 'manzana', 'Ratón', 'RATÓN', 'ratón', 'raton', 'RATON', 'Raton', 'carro', 'CARRO', 'Carro'];
                alert = "Ingles";

                if (palabra == significadosSpain[0] || palabra == significadosSpain[1] || palabra == significadosSpain[2]) {
                    document.getElementById('resultado').value = significadosIngles[0];
                } else {
                    if (palabra == significadosSpain[3] || palabra == significadosSpain[4] || palabra == significadosSpain[5] || palabra == significadosSpain[6] || palabra == significadosSpain[7] || palabra == significadosSpain[8]) {

                        document.getElementById('resultado').value = significadosIngles[1];
                    } else {
                        if (palabra == significadosSpain[9] || palabra == significadosSpain[10] || palabra == significadosSpain[11]) {

                            document.getElementById('resultado').value = significadosIngles[2];
                        } else {


                            if ($('#palabra').val().length == 0) {
                                alert('Ingrese rut');
                                return false;
                            } else {
                                document.getElementById('resultado').value = 'Lo siento, no se encuentra la palabra</p><br>';
                            }
                        }
                    }
                }
            }


            break;
        case op != 0:
            document.getElementById('cambio').innerHTML = '<p id="aviso">Inglés   >   Español</p>';

            traducir = function() {
                let palabra = document.getElementById('palabra').value;

                let significadosSP = ['Manzana', 'Ratón', 'Carro'];
                let significadosIN = ['Apple', 'APPLE', 'apple', 'mouse', 'MOUSE', 'Mouse', 'car', 'CAR', 'Car'];
                alert = "Español";
                if (palabra == significadosIN[0] || palabra == significadosIN[1] || palabra == significadosIN[2]) {

                    document.getElementById('resultado').value = significadosSP[0];
                } else {
                    if (palabra == significadosIN[3] || palabra == significadosIN[4] || palabra == significadosIN[5]) {

                        document.getElementById('resultado').value = significadosSP[1];
                    } else {
                        if (palabra == significadosIN[6] || palabra == significadosIN[7] || palabra == significadosIN[8]) {

                            document.getElementById('resultado').value = significadosSP[2];
                        } else {
                            document.getElementById('resultado').value = 'Lo siento, no se encuentra la palabra';
                        }
                    }
                }


            }


            break;

    }

}