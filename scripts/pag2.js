// $("#lista1 > .item2").hide();

let lista1 = $("#lista1");

//vai além dos filhos na hierarquia
// lista1.find(".item2").hide();

// console.log(lista1.children(".item2").hide());
// let jq = $("#lista1").slideUp(2000).slideDown(2000);


// //encadeamento (chaining)
// //com arrow não funciona
// let objeto = {
//     print10: function (){
//         console.log(10);
//         return this;
//     },

//     print20: function (){
//         console.log(20);
//         return this;
//     }
// }

// objeto.print10().print20().print10().print20();

// console.log($("#lista1").text());
// console.log($("#lista1").html());
// console.log($("#novo").val());
// console.log($("#novo").attr("name"));

//modificar texto e html
// console.log($("h1").text("Lista de Compras"));
console.log($("#lista1").html('<li name="item">Novo Item 1</li"><li name="item">Novo Item 2</li>'));
console.log($("#novo").val("Arroz"));
console.log($("#novo").attr("name", "item_de_compra"));
console.log($("li").attr("name", (posArr, valOrig) => {
    return valOrig+ (posArr+1);
}));

$("#novo").attr("maxlength", 6).attr("type", "password");