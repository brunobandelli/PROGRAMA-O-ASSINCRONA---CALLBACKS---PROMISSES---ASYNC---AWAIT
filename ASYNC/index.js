function pegarId() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        },1500)
    })
}

function buscarEmailNoBanco(id){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("brunobandelli@tecnologyhub.com")
        },2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        var deuErro = false;
        if(!deuErro){
            resolve({time: 6, to: "brunobandelli@tecnologyhub.com"});   //PROMESSA OK!
        }else{
            reject("Fila cheia")                                        //FOI MAL, EU FALHEI!
        }
        },2000)
    })
}


async function principal(){
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    try{
        await enviarEmail("Olá, como vai?",email);
        console.log("Email enviado com sucesso!")
    }catch(erro){
        console.log(erro)
    }
}

principal()


// function pegarUsuarios(){
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 {name: "Bruno", lang: "JS"},
//                 {name: "Bandelli", lang: "Python"},
//                 {name: "Vieira", lang: "C++"}
//             ])
//         },2000)

//     })
// }

// async function principal(){
//     var usuarios = await pegarUsuarios();
//     console.log(usuarios)
//     console.log("Olá!")
// }

// principal()


// console.log("Inicio!");
// pegarId().then((id) => {

//     buscarEmailNoBanco(id).then((email) => {

//         enviarEmail(`Olá, como vai?`, email).then(() => {
//             console.log("Email enviado, para o usuário com id:" + id)
//         }).catch(err => {
//             console.log(err)
//         })
//     })

// })
// console.log("FIM")