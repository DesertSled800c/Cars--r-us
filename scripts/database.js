const database = {
    paints: [
        { id: 1, color: "Silver", price: 5 },
        { id: 2, color: "Midnight Blue", price: 2 },
        { id: 3, color: "Firebrick Red", price: 4 },
        { id: 4, color: "Spring Green", price: 3 }
    ],
    interiors: [
        { id: 1, seat: "Beige Fabric", price: 5 },
        { id: 2, seat: "Charcoal Fabric", price: 2 },
        { id: 3, seat: "White Fabric", price: 4 },
        { id: 4, seat: "Black Leather", price: 3 }
    ],
    techs: [
        { id: 1, package: "Basic Package", price: 5 },
        { id: 2, package: "Navigation Package", price: 2 },
        { id: 3, package: "Visibilty Package", price: 4 },
        { id: 4, package: "Ultra Package", price: 3 }
    ],
    wheels: [
        { id: 1, sizeAndType: "17-inch Pair Radial", price: 5 },
        { id: 2, sizeAndType: "17-inch Pair Radial Black", price: 2 },
        { id: 3, sizeAndType: "18-inch Pair Spoke", price: 4 },
        { idz: 4, sizeAndType: "18-inch Pair Spoke Silver", price: 3 }
    ],
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            techId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTechs = () => {
    return database.techs.map(tech => ({...tech}))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}