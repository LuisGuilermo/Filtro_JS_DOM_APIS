import { urlCompany } from "../api/urls.js"

//selectores
const formLogin = document.getElementById("formLogin")
const email = document.getElementById("email")
const password = document.getElementById("password")

//eventos

formLogin.addEventListener("submit",(e)=>{
    e.preventDefault()
    login()
})

//funciones
async function login() {
    const response = await fetch(`${urlCompany}?email=${email.value}`)
    const date = await response.json()
    if(!date){
        console.log("La cuenta no existe");
        return 
    }
    if (date[0].password !== password.value) {
        console.log("La contraseña es incorrecta");
        return
    }
    console.log("Todo bien");
    localStorage.setItem("user",JSON.stringify(date[0]))
    window.location.href="administrator.html"
}