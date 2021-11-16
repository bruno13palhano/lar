// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// let auth = firebase.auth();

//usando JQuery
// $(".primeiro").hide();

// setTimeout(() =>{
//     $(".primeiro").show();
// }, 2000);


//usando js puro
// document.querySelectorAll(".primeiro").forEach((elemento) => {
//     elemento.style.display = "none";
// });

// setTimeout(() =>{
//     document.querySelectorAll(".primeiro").forEach((elemento) => {
//         elemento.style.display = "block";
//     });
// }, 2000);


// $("#sair").hide();
// $(".primeiro").click(() => {
//     console.log("click");
// });
// $(".primeiro").mouseenter(() => {
//     console.log("mouse enter");
// });
// $(document).mouseleave(() => {
//     console.log("mouse leave");
//     $("#sair").show();
// });
// $(".primeiro").dblclick(() => {
//     console.log("double click");
// });

// $("#button").click(() => {
    //some com efeito de transição
    // $("#square").fadeOut();
    //aparece com efeito de transição
    // $("#square").fadeIn("slow");

    // reversa entre os dois
    // $("#square").fadeToggle("slow");

    // $("#square").fadeTo(1000, 0.3);
    // $("#square").slideToggle(2000);

    // $("#green").animate({height: 700, width: 700}, 2000);
// });

// $("#stop").click(() => {
//     $("#green").stop();
// });


//encadeamento
// $("button").click(() =>{
//     $("#green").hide(2000).show(2000);
// });

$("#button").click(() => {
    $("#green").hide(2000, () => {
        $("#square").show(2000);
    });
});