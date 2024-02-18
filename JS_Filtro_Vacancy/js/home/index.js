import {get} from "../api/fecths.js"
import { urlJobs } from "../api/urls.js"
import { printCards } from "./vacancyDom.js"

//selectores

const select = document.getElementById("modality-filter")
const optionRemote= document.getElementById("remote")
const optionInPerson= document.getElementById("inPerson")
const Search = document.getElementById("Search")
const searchDiv = document.getElementById("searchDiv")
const formSearch = document.getElementById("formSearch")



//eventos
document.addEventListener("DOMContentLoaded",()=>{
    getCardsJobs()
})

formSearch.addEventListener("click",(event)=>{
    event.preventDefault();

    filterRemote()
    filterName();
})


//funciones
async function getCardsJobs(){
    const jobs = await get(`${urlJobs}?_embed=company`)
    printCards(jobs)
}

async function filterRemote(){
        if (select.value === optionRemote.value) {
            const jobs = await get(`${urlJobs}?modality=remote&_embed=company`)
            printCards(jobs)
        }else if(select.value === optionInPerson.value){
            const jobs = await get(`${urlJobs}?modality=In person&_embed=company`)
            printCards(jobs)
        }else{
            const jobs = await get(`${urlJobs}?_embed=company`)
            printCards(jobs)
        }
}

async function filterName() {
    if (!Search) {
        const jobs = await get(`${urlJobs}?_embed=company`)
        printCards(jobs)
        return
    }

        const jobs = await get(`${urlJobs}?_embed=company&name=${Search.value}`);
        printCards(jobs)
    
}