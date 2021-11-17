const firebaseConfig = {
    apiKey: "AIzaSyBXD2cB-9VOIawbRSJwipL3rleEJ-vsw1s",
    authDomain: "colegio-80ae7.firebaseapp.com",
    projectId: "colegio-80ae7",
    storageBucket: "colegio-80ae7.appspot.com",
    messagingSenderId: "340118248253",
    appId: "1:340118248253:web:48aa09337ccdb9ec448354",
    measurementId: "G-H9CGTXXMCP"
};


class User{
    constructor(email, password, name, lastName=""){
        this._email = email;
        this._password = password;
        this._name = name;
        this._lastName = lastName;
    }

    setEmail(email){
        this._email = email;
    }
    getEmail(){
        return this._email;
    }

    setPassword(password){
        this._password = password;
    }
    getPassword(){
        return this._password;
    }

    setName(name){
        this._name = name;
    }
    getName(){
        return this._name;
    }

    setLastName(lastName){
        this._name = lastName;
    }
    getLastName(){
        return this._lastName;
    }
}
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

//ler todos os dados de uma coleção
// db.collection("turmaA").get()
//                         .then((snapshot) =>{
//                             snapshot.apshot) =>{
//                             snapshotforEach((doc) => {
//                                 let aluno = doc.data();apshot) =>{
//                             snapshot
//                                 console.log(aluno.nome);
//                                 // console.log(doc.data().nome);
//                             });
//                         });


//ler um único registro em uma coleção, pelo Id
// let docRef = db.collection("turmaA").doc("OMpfA9xDG0SEWq7LhFVo");

// docRef.get().then((doc)=>{
//     let aluno = doc.data();
//     console.log(aluno.nome);
//     // console.log(doc.data());
// });


//selecionando sem ser pelo Id
// db.collection("turmaA").where("notas.nota2", "<=", 8.0).get().then(snapshot =>{
//     snapshot.forEach(doc => {
//         console.log(doc.data().nome);
//     });
// });

// const TURMA = "turmaA";
//adicionar um elemento
// db.collection(TURMA).add({
//     nome: "Helena",
//     sobrenome: "Barbosa",
//     notas: {
//         nota1: 10.0,
//         nota2: 9.5
//     }
// }).then(doc =>{
//     console.log("Documento inserido com sucesso.", doc);
// }).catch(err =>{
//     console.log(err);
// });

//adicionar um elemento ou modificar(sobreescreve)
// db.collection(TURMA).doc("AlunoNovo1").set(
//     {

//     notas: {
//         nota1: 10.0,
//     }
//     } ,{ merge: true }//faz com que altere ou adicione só os campos em questão.
// ).then(() =>{
//     console.log("Documento inserido com sucesso.");
// }).catch(err =>{
//     console.log(err);
// });


//modificar e adicionar novos campos
// db.collection(TURMA).doc("AlunoNovo").update({
//     nome: "Antônio",
//     sobrenome: "Barbosa",
//     cidades: firebase.firestore.FieldValue.arrayUnion("Ceará"),//adicionar um novo elemento no array
//     //para remover
//     //firebase.firestore.FieldValue.arrayRemove("Elemento");
//     faltas: firebase.firestore.FieldValue.increment(1)//incrementa faltas em um
// }).then(() =>{
//     console.log("Documento atualizado com sucesso.");
// }).catch(err =>{
//     console.log(err);
// })

//capturando alterações no banco
// db.collection(TURMA).onSnapshot(snapshot =>{

//     snapshot.forEach(doc =>{
//         console.log(doc.data());
//     });
// });

//capturando alterações em um documento específico
// let docRefBruno = db.collection(TURMA).doc("iDpTTxjJZEwuMiCOHRuj");

// docRefBruno.onSnapshot(doc =>{
//     console.log(doc.data());
// });

//apagando um campo do documento
// db.collection(TURMA).doc("iDpTTxjJZEwuMiCOHRuj").update(
//     {
//         faltas: firebase.firestore.FieldValue.delete()
//     }
// ).then(() =>{
//     console.log("Campo deletado com sucesso.");
// }).catch(err => {
//     console.log(err);
// });

//apagando um documento
// db.collection(TURMA).doc("iDpTTxjJZEwuMiCOHRuj").delete().then(() =>{
//     console.log("Documento deletado com sucesso.");
// }).catch(err => {
//     console.log(err);
// });
