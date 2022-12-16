import { getPaints, getInteriors, getTechs, getWheels, getOrders } from "./database.js";

const buildOrderListItems = (order) => {
    const paints = getPaints()
    const interiors = getInteriors()
    const techs = getTechs()
    const wheels = getWheels()

    const foundPaints = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )
    const foundInteriors = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const foundTechs = techs.find(
        (tech) => {
            return tech.id === order.interiorId
        }
    )
    const foundWheels = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    let totalCost = foundPaints.price
    totalCost += foundInteriors.price
    totalCost += foundTechs.price
    totalCost += foundWheels.price
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USA"
    })

    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    const orders = getOrders()

    let html = `<ul>`
    const listItems = orders.map(buildOrderListItems)

    html += listItems.join("")
    html += `</ul>`

    return html
}