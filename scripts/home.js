firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let auth = firebase.auth();
let userDados;

//função para fazer logout
function logout(callback){
    auth.signOut().then(() =>{
        callback();

    }).catch(err => {
        console.log(err);
    });
}

//Botão logout
$("#logout").click(() => {
    logout(() => {
        fetch('/', {
            method: 'get'
        
        }).then(response => {
            //redireciona para página de login
            window.open(response.url, '_self');

        }).catch(err => {
            console.log(err);
        });
    });
});


auth.onAuthStateChanged(function(user) {
    if (user) {
        //Login bem sucedido
        start(user);
        // console.log(user.email);
        // ler(user.email);
        console.log(user);

    }else {
        // No user is signed in.
        $("body").html("<h1>Erro 401</h1>"
                    +"<h2>NOT AUTHORIZED</h2>"
                    +"<p>Você precisa está logado!</p>");
    }
  });

function setHeader(user){
    $("#h1_welcome").text(`${user.name} ${user.lastName}`);
}

async function start(user){
    console.log("print externo do email do usuário ", user.email);
    
    await db.collection(user.email).get().then(snapshot =>{
        snapshot.forEach(item =>{
            // console.log(item.data());
            userDados = item.data();
        });

        console.log(snapshot);//falta definir o que a home faz

        console.log("dados:", userDados);
        setHeader(userDados);

    }).catch(err =>{
        console.log(err);
    });
}
