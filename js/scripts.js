const temaOscuro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme","dark");
    document.querySelector("nav").setAttribute("class","navbar navbar-expand-lg text-white");
    document.querySelector("#floatingTextarea2").setAttribute("class","form-control border-0 text-white");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-sun-fill");
    console.log("fin temaOscuro");
}

const temaClaro = ()=>{
    document.querySelector("body").setAttribute("data-bs-theme","ligth");
    document.querySelector("nav").setAttribute("class","navbar navbar-expand-lg text-dark");
    document.querySelector("#floatingTextarea2").setAttribute("class","form-control border-0 text-back");
    document.querySelector("#dl-icon").setAttribute("class","bi bi-moon-stars-fill");
    console.log("fin temaClaro");
}

const cambiarTema = ()=>{
    document.querySelector("body").getAttribute("data-bs-theme") === "ligth"? temaOscuro() : temaClaro();
}


function validator(){
    let texto = document.getElementById("textAreaOne").value;
    let validador = texto.match(/^[a-z]*$/);
    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function encriptar(){
    if(!validator()){
        let texto = document.getElementById("textAreaOne").value;
        let textoEnciptado = document.getElementById("floatingTextarea3");
        let textCifrado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        if(texto.length != 0){
            document.querySelector("#floatingTextarea3").setAttribute("class","form-control border-0");
            document.querySelector("#muneco").setAttribute("class","card-img-top p-5 my-0 d-none");
            document.querySelector("#parrafo").setAttribute("class","d-none");
            document.querySelector("#Copy").setAttribute("class","btn btn-primary");
            document.getElementById("textAreaOne").value ="";
            document.querySelector("#titulo").textContent = "Texto encriptado con exíto";
            textoEnciptado.textContent = textCifrado;
        }else{
            alert("Debes ingresar un texto en minuscula y sin acentos...");
        }

    }

}

function desencriptar(){
  if(!validator()) {
        let texto = document.getElementById("textAreaOne").value;
        let textoEnciptado = document.getElementById("floatingTextarea3");
        let textoDescifrado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
        if(texto.length != 0){
            document.querySelector("#floatingTextarea3").setAttribute("class","form-control border-0");
            document.querySelector("#muneco").setAttribute("class","card-img-top p-5 my-0 d-none");
            document.querySelector("#parrafo").setAttribute("class","d-none");
            document.querySelector("#Reset").setAttribute("class","btn btn-primary");
            document.getElementById("textAreaOne").value ="";
            document.querySelector("#titulo").textContent = "Texto desencriptado con exíto";
            console.log(textoDescifrado);
            document.getElementById("floatingTextarea3").value = textoDescifrado;
        }else{
            alert("Debes ingresar un texto en minuscula y sin acentos...");
        }
    } 
}

function Copy(){
    let mensaje = document.getElementById("floatingTextarea3");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado");    
    }

function Reset(){
    location.reload();
    return true;
}