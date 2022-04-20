//Importando arquivo json
var catalogo = require("./catalogo.json")
console.log(catalogo)
// console.log(catalogo.data)


//Quando convertemos o JSON para string, ele fica sem a formatação de espaços, enter, etc. E às vezes precisamos dele nesse formato.
var catalogoString = JSON.stringify(catalogo)
console.log(catalogoString)

var catalogoObjeto = JSON.parse(catalogoString)
console.log(catalogoObjeto)
