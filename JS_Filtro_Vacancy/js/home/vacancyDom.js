import {clean} from "../utils/clean.js"


//selectores
const bodyCards = document.getElementById("cards")

//funciones

export async function printCards(cardsContem){
    clean(cards)

    cardsContem.forEach(cards => {
        const card = document.createElement("div")
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const div = document.createElement("div")
        const divRow = document.createElement("div")
        const divCol = document.createElement("div")
        const divDecoration = document.createElement("div")
        const divDecoration2 = document.createElement("div")
        const i = document.createElement("i")
        const span = document.createElement("span")
        const i2 = document.createElement("i")
        const span2 = document.createElement("span")
        const divImagen = document.createElement("div")
        const img = document.createElement("img")

        card.classList.add('card-job')
        title.textContent=cards.name
        description.textContent=cards.description
        
        divRow.classList.add("row")
        divCol.classList.add("col-6")
        divDecoration.classList.add("d-flex","gap-2","align-items-center","fs-5","text-muted")

        divDecoration2.classList.add("d-flex","gap-2","align-items-center","fs-5","text-muted")

        i.classList.add("bx","bx-current-location")
        i.textContent=cards.location
        

        

        i2.classList.add("bx", "bx-time")
        i2.textContent= cards.date

        span2.classList.add("fw-semibold")


        divImagen.classList.add("col-6","d-flex", "justify-content-end")

        divImagen.appendChild(img)

        img.src=cards.company.imageCompany
        img.width="80"
        img.height="80"
        img.alt="logo"
        img.classList.add("object-fit-countain", "rounded-circle","img-company")
        
        card.appendChild(title)
        card.appendChild(description)
        card.appendChild(divRow)
        divRow.appendChild(divCol)
        divCol.appendChild(div)
        divCol.appendChild(divDecoration)
        divDecoration.appendChild(i)
        divDecoration.appendChild(span)
        divCol.appendChild(divDecoration2)
        divDecoration2.appendChild(i2)
        divDecoration2.appendChild(span2)
        divRow.appendChild(divImagen)

        bodyCards.appendChild(card)

    });
}