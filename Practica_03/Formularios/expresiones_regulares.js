var reg = /[Jj]avascript/
var cadena = "Hola desde javascript"

console.log(reg.test(cadena))
console.log(cadena.match(reg))



console.log("aa2bb".match(/[0-9]/))
console.log("22 33".match(/[0-9]/))

console.log("hola \n \"mundo\"")
// Metacaracteres
/*
\w => para letras [a-zA-Z]
\d =>[0-9]
* equivale a 0 o mas veces {0,}
+ equivale a 1 o mas veces {1,}
? equivale a 0 o 1 vez {0,1}

*/
console.clear()
console.log("aa2bb".match(/\d{2}/))
console.log("aa2e2 33".match(/\d{2}/))
console.log("12348".match(/\d{1,3}/))
console.clear()
console.log("a2a".match(/a\d+a/))
console.log("aa".match(/a\d*a/))


var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
console.clear()
console.log(regEmail.test('juyagu@gmail.com'))

document.querySelector("#email").addEventListener("blur",function(){
    email = document.querySelector("#email").value
    if(!regEmail.test(email)){
        alert("El formato del email no es válido")
    }else{
        alert("Perfecto")
    }
})


// aas-f.s-f



//hola@hola.c
/*

@hola-quetal
@hola.quetal.gmai
####hola
primera@segunda.com


primera => prim.era prim-era
primera.@
primera-@
prim.era-hola
prim.-era



*/
