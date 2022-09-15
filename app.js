// display the 3 columns preview card dynamically

const card = [
    {
        id: 1,
        img: "images/icon-sedans.svg",
        header: "Sedans",
        text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        buttonText: "Learn more",
        class:"btn-1"
    },
    {
        id: 2,
        img: "images/icon-suvs.svg",
        header: "Suvs",
        text: " Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        buttonText: "Learn more",
        class:"btn-2"
    },
    {
        id: 3,
        img: "images/icon-luxury.svg",
        header: "luxury",
        text: " Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        buttonText: "Learn more",
        class:"btn-3"
    }

]

const container = document.querySelector(".container");

window.addEventListener('DOMContentLoaded', function () {
    let displayColumn = card.map(function (item) {
        // console.log(item);

        return `<div class="box">

        <img src=${item.img} alt=${item.header}>

        <h1>${item.header}</h1>

        <p>
          ${item.text}
        </p>

        <button class=${item.class}>
           ${item.buttonText}
        </button>
      </div>`;
    });
    displayColumn = displayColumn.join("");
    container.innerHTML = displayColumn;

})