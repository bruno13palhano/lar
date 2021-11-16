//criando users (Login)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let auth = firebase.auth();



function login(userEmail, userPassword, callback){
                                                        //SESSION, NONE, LOCAL
    auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() =>{
        auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then(loggedUser =>{
            console.log(auth.currentUser);
            callback();        
        }).catch(err =>{
            console.log(err);
        });
    }).catch(err =>{
        console.log(err);
    });
    
}

//botão para login
let buttonLogin = document.getElementById('button_login');
buttonLogin.addEventListener('click', ()=>{  
    let emailForm = document.getElementById('username');
    let passwordForm = document.getElementById('password');
    
    login(emailForm.value, passwordForm.value, () =>{
        fetch('/login', {
            method: 'get'

        }).then(response => {
            //abrindo à página de login
            window.open(response.url, '_self');
        }).catch(err => {
            console.log(err);
        });
    });

});

//botão para criar conta
let buttonCreate = document.getElementById('button_create');
buttonCreate.addEventListener('click', () => {
    fetch('/createaccount', {
        method: 'get'
    
    }).then(response => {
        //abrindo à página de criação de conta
        window.open(response.url, '_self');
    }).catch(err => {
        console.log(err);
    });
});










// function ler(){
//     db.collection("lista").get().then(snapshot =>{
//         snapshot.forEach(item =>{
//             console.log(item.data());
//         });
//     }).catch(err =>{
//         console.log(err);
//     });
// }

// function escrever(){
//     db.collection("lista").add({title: "Novo Objeto", numero: Math.random()})
//         .then(doc =>{
//             console.log(doc);
//         })
//         .catch(err =>{
//             console.log(err);
//         });
// }



//método para criar usuários do firebase


// function criarUsuario(){
//     auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
//         console.log(user);
//     }).catch(err =>{
//         console.log(err);
//     });
// }


// function logout(){
//     auth.signOut().then(() =>{
//         console.log("Usuário fez logout");
//     }).catch(err => {
//         console.log(err);
//     });
// }

// // let user = auth.currentUser;
    
// // console.log(user);

// auth.onAuthStateChanged(user =>{
//     if(user){
//         console.log(user);
//     }else{
//         console.log("Ninguém logado.")
//     }
// });

// setTimeout(login, 2000);