import { Paints } from "./paints.js";
import { Interiors } from "./interiors.js";
import { Techs } from "./techs.js";
import { Wheels } from "./wheels.js";
import { Orders } from "./orders.js";

import { addCustomOrder } from "./database.js";

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder(parseInt(event.target.value))
        }
    }
)


export const Cars = () => {
    return `
        <h1>Cars'R Us</h1>

        <article class="choices">
            <section class="choices__paints options">
                <h2>Paints</h2>
                ${Paints()}
            </section>
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${Interiors()}
            </section>
            <section class="choices__techs options">
                <h2>Technology</h2>
                ${Techs()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Checkout Your Car</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
    `
}
