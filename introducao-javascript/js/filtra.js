let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){  //event "input" enxerga cada letra digitada
    console.log(this.value)
    var pacientes = document.querySelectorAll(".paciente");
   
    if(this.value.length > 0 ){
        for(let i=0; i <pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value, "i")  //EXPRESSAO REGULAR, "i" Case Insentive
    
            if(!expressao.test(nome)){             //Se nome for diferente do valor do campo
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
    
            }
        }
    }else{
        for(let i=0; i <pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});

