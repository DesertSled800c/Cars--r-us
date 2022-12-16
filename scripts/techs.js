import { getTechs, setTech } from "./database.js"

const techs = getTechs()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Techs = () => {
    let html = ""

    html += `<select id="tech">
    <option value="0">Select Tech Package</option>`

    // This is how you have been converting objects to <li> elements
    for (const tech of techs) {

        html += `<option value="${tech.id}">${tech.package}</option>`

    }
    html += `</select>`

    return html
}