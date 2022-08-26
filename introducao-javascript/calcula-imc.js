let titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutricionista";

let pacientes = document.querySelectorAll(".paciente"); // apenas o paciente

for(let i = 0; i < pacientes.length ; i++){
    
    let paciente = pacientes[i];

    let tdAltura = paciente.querySelector(".info-altura"); //  valor altura
    let tdPeso = paciente.querySelector(".info-peso"); // valor peso
    let tdImc = paciente.querySelector(".info-imc");
     
    let altura = tdAltura.textContent; //conteudo da altura
    let peso = tdPeso.textContent;  // conteudo do peso
    
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    
    
    //VALIDAÇÂO PESO
    if(!pesoValido){    // ! = not negação
        pesoValido = false;
        tdPeso.textContent = "Peso Inválido"; // Mensagem "PESO INVALIDO"
        paciente.classList.add("paciente-invalido");    // classList = busco as classes.  .add= adiciono nova classe
    }
    
    //VALIDAÇÂO ALTURA
    if(!alturaValida){
        alturaValida = false;
        tdAltura.textContent = "Altura Inválida"; // Mensagem "ALTURA INVALIDA"
        paciente.classList.add("paciente-invalido");    // classList = busco as classes.  .add= adiciono nova classe
    }
    
    //APENAS CALCULA, CASO PESO E ALTURA VALIDA
    if(pesoValido && alturaValida){   
        let imc = calculaImc(peso,altura);// calula IMC
        tdImc.textContent = imc; // atualiza tela IMC  // toFixed - Escolhe quantas casas decimais imprimirá
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
};

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}








