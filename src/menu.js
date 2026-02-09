function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Americano",
            "Freshly pulled expresso added to hot water."
        )
    );

    menu.appendChild(
        createMenuItem(
            "Capuccino",
            "Expresso and steamed milk topped with generous layer of milk foam."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Latte",
            "Expresso balanced with steamed milk and topped with a thin layer of foam."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Iced Americano",
            "Freshly pulled expresso and water over ice."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Iced Coffee",
            "Our flash brewed iced coffee blend served chilled over ice."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Iced Latte",
            "Expresso and chilled milk over ice."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Matcha Latte",
            "Smith matcha combined with Monin vanilla syrup and steamed milk."
        )
    );
    menu.appendChild(
        createMenuItem(
            "Hot Cocoa",
            "Ghirardelli dark or white chocolate with steamed milk; get it `all the way` with marshmallows and whipped cream!"
        )
    );
};


function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `imgs/${name.toLowerCase().replace(/\s/g, "")}.jpg`;
    foodImage.alt = name;

    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    menuItem.appendChild(foodImage);

    return menuItem;
}


function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
};

export default loadMenu;