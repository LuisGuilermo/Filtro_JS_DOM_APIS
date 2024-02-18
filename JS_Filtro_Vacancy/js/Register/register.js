import { get, post } from "../api/fecths.js"
import { urlCompany } from "../api/urls.js"
//selectores
const form = document.getElementById("loginForm")
const formEmail = document.getElementById("email")
const formPassword = document.getElementById("password")
const formPasswordConfir = document.getElementById("password-confirmation")
const formCompany = document.getElementById("company")
const formImgCompany = document.getElementById("img-company")
const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;


//eventos

form.addEventListener("click",(event)=>{
    event.preventDefault();

    validarEmail()
})


//funciones

async function registrarse() {
    const newCompany={
        email: formEmail.value,
        password: formPassword.value,
        nameCompany:formCompany.value,
        imagenCompany: formImgCompany.value
    }
    await post(urlCompany,newCompany)
}

async function validarEmail() {
    const date = await get(urlCompany)
    if(date[0].email === formEmail.value){
        alert ("El correo ya existe")
        return
    }
    else{
        registrarse()
    }
}