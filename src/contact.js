function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "Phone: (123) 456-7890";

    const email = document.createElement("p");
    email.textContent = "Email: coffe@email.com";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Coffee Street, Caffeine City";

    contact.appendChild(phoneNumber);
    contact.appendChild(email);
    contact.appendChild(address);

    return contact;
};

function loadContact() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createContact());  
};

export default loadContact;