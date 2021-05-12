function enviarEmail(corpo, para, callback){
    setTimeout(() => {
        //........ LÓGICA
        var deuErro = false;
        if(deuErro){
            callback(12, "O envio do Email falhou !");
        }else{
            callback(12);
        }
    },2000)
}

console.log("Inicio do Envio de e-mail!")
enviarEmail("Oi, sejá bem vindo ao TecnologyHub", "bandelli@tecnologyhub.com", (time,erro) => {

    if(erro == undefined){          //OK
    console.log("TUDO OK!");
    console.log(`Tempo: ${time}s`)
    }else{                          //NÃO OK
    console.log(`Ocorreu um erro: ${erro}`)
    }
});
