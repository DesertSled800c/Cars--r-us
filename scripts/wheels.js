import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
        }
    }
)

export const Wheels = () => {
    let html = ""

    html += `<select id="wheel">
    <option value="0">Select Wheels</option>`

    // This is how you have been converting objects to <li> elements
    for (const wheel of wheels) {

        html += `<option value="${wheel.id}">${wheel.sizeAndType}</option>`

    }
    html += `</select>`

    return html
}