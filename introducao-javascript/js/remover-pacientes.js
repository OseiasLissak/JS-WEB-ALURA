let tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    /* let alvoEvento = event.target; // event.target = alvo onde fui clicado;
    let paiDoAlvo = alvoEvento.parentNode; //parentNode (PAI DO EVENTO, neste caso pega a TR inteira) 
    paiDoAlvo.remove();    
 */
    event.target.parentNode.classList.add("fadeOut"); // adiciona classe fadeOut (opacidade 5s)
    
    setTimeout(function(){                            //Aguarda 500ms para executar function
        event.target.parentNode.remove();             //Remove o pai do alvo.  
    }, 500);                                          // Sempre em milisegundos
});
