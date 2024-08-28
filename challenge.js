
let valoresDeEncriptado = {'e':"enter", 'i': "imes", 'a':"ai", 'o': "ober"};
let valoresDeDesencriptado = {'enter':"e", 'imes': "i", 'ai':"a", 'ober': "o"};

function encriptarTexto(){
    let texto = document.querySelector('#textoUsuario').value;
    let palabraEncriptada = [];

    for (let u = 0; u<texto.length; u++){
        let letra = texto[u];
        for (let clave in valoresDeEncriptado){
            if(letra === clave){
                letra = valoresDeEncriptado[clave];
                break
            }
          }
        palabraEncriptada.push(letra);
        }  
    let textoEncriptado = palabraEncriptada.join('');
    mostrarSalida(textoEncriptado);
}

function desencriptarTexto(){   
    let textoEncriptado = document.querySelector('#textoUsuario').value;
    let palabraDesencriptada = [];

    for(let i =0; i < textoEncriptado.length;){
        let reemplazado = false;

        for (let clave in valoresDeDesencriptado){
            if (textoEncriptado.substr(i,clave.length)==clave){
                palabraDesencriptada.push(valoresDeDesencriptado[clave]);
                i += clave.length;
                reemplazado = true;
                break;
            }
        }             
        if (!reemplazado) {
            palabraDesencriptada.push(textoEncriptado[i]);
            i++;
        }
    }
    let textoDesencriptado = palabraDesencriptada.join('');
    mostrarSalida(textoDesencriptado);
}

function mostrarSalida(resultado) {
    let campoSalida = document.querySelector('#textoDeSalida');
    let imagenVectorizada = document.querySelector('#imagenVectorizada');
    let fraseSuperior = document.querySelector('#ningunTexto');
    let fraseInferior= document.querySelector('#ingresaElTexto');
    let botonCopiar = document.querySelector('#botonCopiar');

    campoSalida.textContent = resultado;

    if (resultado.trim()){
        imagenVectorizada.style.display = 'none';
        fraseSuperior.style.display = 'none';
        fraseInferior.style.display = 'none';
        campoSalida.style.display = 'block';
        botonCopiar.style.display = 'block';

    } else {
        imagenVectorizada.style.display = 'block';
        fraseSuperior.style.display = 'block';
        fraseInferior.style.display = 'block'; 
        campoSalida.style.display = 'none';
        botonCopiar.style.display = 'none';
    }
}

function convertirAMinusculas() {
    let input = document.querySelector('#textoUsuario');
    input.value = input.value.toLowerCase();
}

function copiarTexto(){
    let textoSalida = document.getElementById("textoDeSalida").innerText;
    if (textoSalida.trim()){
        navigator.clipboard.writeText(textoSalida)
        // .then(() => {
        // })
        .catch(error => {
            console.error("Error al copiar",error);
        });
    }
}

