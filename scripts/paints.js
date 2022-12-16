import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = ""

    html += `<select id="paint">
    <option value="0">Select Paint Color</option>`

    // This is how you have been converting objects to <li> elements
    for (const paint of paints) {

        html += `<option value="${paint.id}">${paint.color}</option>`

    }
    html += `</select>`

    return html
}