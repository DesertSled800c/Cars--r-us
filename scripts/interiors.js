import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interiors = () => {
    let html = ""

    html += `<select id="interior">
    <option value="0">Select Interior</option>`

    // This is how you have been converting objects to <li> elements
    for (const interior of interiors) {

        html += `<option value="${interior.id}">${interior.seat}</option>`

    }
    html += `</select>`

    return html
}