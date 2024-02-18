import { deleteDB, get, post, update } from "../../api/fecths.js"
import { urlJobs } from "../../api/urls.js"
import { printVacancy } from "./vacancyDOM.js"


//selectores
const form = document.getElementById("formVacancy")
export const name = document.getElementById("title-job")
export const experience = document.getElementById("experience")
export const salary = document.getElementById("salary")
export const Location = document.getElementById("Location")
export const modality = document.getElementById("modality")
export const description = document.getElementById("description")
export const updateID = document.getElementById("updateIdVacancy")

//eventos

document.addEventListener("DOMContentLoaded",()=>{
    getVacancy()
})


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    if(updateID.value){
        updateVacancy(updateID.value)
    }else{
        addVacancy();
    }
})


//funciones

async function addVacancy() {
    const newVacancy={
        name : name.value,
        experience: experience.value,
        salary:salary.value,
        location:Location.value,
        modality:modality.value,
        description:description.value,
        companyId:JSON.parse(localStorage.getItem("user")).id,
        date: new Date().toISOString().split("T")[0]
    }
    await post(urlJobs,newVacancy)
}

async function getVacancy() {
    const jobs =await get(`${urlJobs}?_embed=company&companyId=${JSON.parse(localStorage.getItem("user")).id}`)
    console.log(jobs);
    printVacancy(jobs)
}

export async function deleteVacancy(id) {
    const date = await deleteDB(`${urlJobs}/${id}`)
    return date
}

async function updateVacancy(id){
    const UpdateVacancy={
        name : name.value,
        experience: experience.value,
        salary:salary.value,
        location:Location.value,
        modality:modality.value,
        description:description.value,
        companyId:JSON.parse(localStorage.getItem("user")).id
    }
    const vancancy = await update (`${urlJobs}/${id}`,UpdateVacancy) 
    return vancancy
}

