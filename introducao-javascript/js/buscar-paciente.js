let botaoBuscar = document.querySelector("#buscar-paciente")

botaoBuscar.addEventListener("click", function(){
    console.log("ADICIONADO")

    //API

    let xhr = new XMLHttpRequest();   //Objeto que faz requisição HTTP
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //open, abre conexão. Requisição tipo GET   
    
    xhr.addEventListener("load", function(){   // depois que carregar

        let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200){ //status 200= deu tudo certo
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;  // resposeText = texto da resposta
            console.log(resposta);
            console.log(typeof resposta)
            
            let pacientes = JSON.parse(resposta);
            console.log(pacientes)
            console.log(typeof pacientes);
    
            pacientes.forEach( function(paciente){
                adicionaPacienteNaTabela(paciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.response);
            erroAjax.classList.remove("invisivel");
        }
    });


    xhr.send(); // envia requisição

});