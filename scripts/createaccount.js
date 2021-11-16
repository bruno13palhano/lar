
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let auth = firebase.auth();

function criarUsuario(newUserEmail, newUserPassword, newUserName, callback){

    auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
        console.log(user);
        db.collection(newUserEmail).doc("dados").set({name: newUserName}, {merge: true});
        console.log("Aqui");
        callback();
    }).catch(err =>{
        console.log(err);
    });
}

let btnCreateAccount = document.getElementById('button_create');
btnCreateAccount.addEventListener('click', () => {
    let newUserEmail = document.getElementById('username');
    let newUserPassword = document.getElementById('password');
    let newUserName = document.getElementById('name');

    criarUsuario(newUserEmail.value, newUserPassword.value, newUserName.value, () =>{
        window.open('/views/home.html', '_self');
    });
    
});

let hasAccount = document.getElementById('has_account');
hasAccount.addEventListener('click', () => {
    window.open('/index.html', '_self');
    console.log("Has Account");
});
// db.collection('users').doc(user_id).set({foo:'bar'}, {merge: true})
