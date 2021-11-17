firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let auth = firebase.auth();

function criaUsuario(newUser, callback){

    auth.createUserWithEmailAndPassword(newUser.getEmail(), newUser.getPassword()).then(user =>{
        console.log(user);
 
        console.log("Aqui");
        callback();
        
    }).catch(err =>{
        console.log(err);
    });
}

let btnCreateAccount = document.getElementById('button_create');
btnCreateAccount.addEventListener('click', () => {
    //lendo valores dos formulários
    let newUserEmail = document.getElementById('username').value;
    let newUserPassword = document.getElementById('password').value;
    let newUserName = document.getElementById('name').value;
    let newUserLastname = document.getElementById('last_name').value;

    //classe criada para reduzir onúmero de argumentos da função criarUsuario()
    const newUser = new User(newUserEmail, newUserPassword, newUserName, newUserLastname);

    criaUsuario(newUser, async() =>{ 
        await db.collection(newUser.getEmail()).doc("dados").set({name: newUser.getName(),
                                                                  lastName: newUser.getLastName()}, {merge: true});
        
        fetch('/home', {
            method: 'get'
        
        }).then(response => {
            window.open(response.url, '_self');
    
        }).catch(err => {
            console.log(err);
        });
    });
    
});



let hasAccount = document.getElementById('has_account');
hasAccount.addEventListener('click', () => {
    fetch('/', {
        method: 'get'

    }).then(response => {
        window.open(response.url, '_self');

    }).catch(err => {
        console.log(err);
    });
});
// db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})
