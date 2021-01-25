var botones = document.querySelectorAll('button');
console.log(botones)

botones[1].onclick = saludar;

function saludar(){
    console.log('Que tal como va?')
}

botones[2].addEventListener('click',function(){
    console.log("Hola desde una función anonima")
})

botones[2].addEventListener('click',() => console.log("Hola desde una función anonima"))

var listenerMio = () => console.log("Hola desde una función NO anónima");

