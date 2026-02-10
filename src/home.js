function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const headline = document.createElement("h1");
    headline.textContent= "Come Visit our Coffee Shop";

    const orderButton = document.createElement("button");
    orderButton.textContent = "Order Now";

    const info = document.createElement("div");
    info.classList.add("info");

    const location = document.createElement("p");
    location.textContent = "123 Coffee Street, Caffeine City";

    const hours = document.createElement("p");
    hours.textContent = "Open: 7am - 7pm Daily";

    info.appendChild(location);
    info.appendChild(hours);

    home.appendChild(headline);
    home.appendChild(orderButton);
    home.appendChild(info);

    return home;
};

function loadHome() {
    const main = document.getElementById("content");
    main.textContent = "";
    main.appendChild(createHome());
};

export default loadHome

