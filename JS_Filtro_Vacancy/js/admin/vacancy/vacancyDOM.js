import { clean } from "../../utils/clean.js";
import { deleteVacancy, experience, name, salary, updateID } from "./index.js";

//selectores

const tbodyVacancy = document.getElementById("tBodyVacancy")
const btnNewVacancy = document.getElementById("btnNewVacancy")

//funciones
export async function printVacancy(jobs) {
    clean(tbodyVacancy)

    jobs.forEach(job => {
        const  tr = document.createElement('tr')
        const tdImagen = document.createElement("td")
        const tdCompany = document.createElement("td")
        const tdDescription = document.createElement("td")
        const tdLocation = document.createElement("td")
        const tdexperiencie = document.createElement("td")
        const tdModality = document.createElement("td")
        const tdSalary = document.createElement("td")
        const tdButtons = document.createElement("td")

        const btnEdit = document.createElement("button")
        const btnEliminar = document.createElement("button")

        btnEdit.textContent="Editar"
        btnEliminar.textContent="Eliminar"

        btnEdit.classList.add("btn","btn-primary")
        btnEliminar.classList.add("btn","btn-danger")

        btnEdit.addEventListener("click",()=>{
            loadInfoVacancy(job)
        })

        btnEliminar.addEventListener("click",()=>{
            deleteVacancy(job.id)
        })

        tdButtons.appendChild(btnEdit)
        tdButtons.appendChild(btnEliminar)

        const img = document.createElement("img")
        img.src= job.image
        img.width="50"
        img.height="50"

        tdImagen.appendChild(img)

        tdCompany.textContent=job.company.nameCompany
        tdDescription.textContent=job.description
        tdLocation.textContent=job.location
        tdexperiencie.textContent=job.experience
        tdModality.textContent=job.modality
        tdSalary.textContent=job.salary

        tr.appendChild(tdImagen)
        tr.appendChild(tdCompany)
        tr.appendChild(tdDescription)
        tr.appendChild(tdLocation)
        tr.appendChild(tdexperiencie)
        tr.appendChild(tdModality)
        tr.appendChild(tdSalary)
        tr.appendChild(tdButtons)

        tbodyVacancy.appendChild(tr)
    });
}

function loadInfoVacancy(job) {
    name.value =  job.name;
    experience.value= job.experience;
    salary.value= job.salary;
    location.value = job.location;
    modality.value = job.modality;
    description.value = job.description;
    updateID.value = job.id
    btnNewVacancy.click()
}