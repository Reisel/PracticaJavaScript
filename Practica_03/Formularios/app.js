var inputs = document.querySelectorAll('input')
var edad = document.getElementById("edad")


document.getElementById("form_clase").addEventListener('submit',validarCampos)

document.querySelector("#nombre").addEventListener('blur',function(){
    var campo  =document.querySelector("#nombre")
    console.log(campo)
    if(campo.value === ''){
        campo.setCustomValidity('Debe completar este campo1111')
    }else{
        campo.setCustomValidity('')
    }
})

function validarCampos(e){
    
    e.preventDefault()
    var validado = true;
    for(var i= 0; i< inputs.length;i++){
        inputs[i].classList.remove('is-invalid')
        inputs[i].classList.remove('is-valid')
        if(inputs[i].value === ''){
            validado = false
            inputs[i].classList.add('is-invalid')
        }else{
            inputs[i].classList.add('is-valid')
        }
        var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        email = document.querySelector("#email").value
        if(!regEmail.test(email)){
            inputs[i].classList.add('is-invalid')
            validado = false
        }else{
            inputs[i].classList.add('is-valid')
        }
    }
    if(validado){
        document.getElementById("form_clase").submit()
    }
}

edad.addEventListener('keypress',function(event){
    var char = event.charCode || event.keyCode
    if((char < 48 || char >57)|| edad.value.length > 2){
        event.preventDefault()
    }
})