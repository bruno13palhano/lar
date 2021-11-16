firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let auth = firebase.auth();

function ler(userCollection){
    db.collection(userCollection).get().then(snapshot =>{
        snapshot.forEach(item =>{
            console.log(item.data());
        });
    }).catch(err =>{
        console.log(err);
    });
}

function logout(callback){
    auth.signOut().then(() =>{
        callback();
    }).catch(err => {
        console.log(err);
    });
}

$("#logout").click(() => {
    logout(() => {
        window.open("/index.html", "_self");
    });
});
// ler();


auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        setHeader(user.email);
        console.log(user.email);
        ler(user.email);
        console.log(user);
    } else {
        // No user is signed in.
        $("body").html("<h1>Erro 401</h1>"
                    +"<h2>NOT AUTHORIZED</h2>"
                    +"<p>Você precisa está logado!</p>");
    }
  });

function setHeader(userEmail){
      $("#h1_welcome").text(`Welcome ${userEmail}`);
}


console.log($("[key=1]"));