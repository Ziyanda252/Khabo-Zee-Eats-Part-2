
const menuData = [
    {
        name: "Inyama yenhloko",
        image: "images/Inyama yenhloko.webp",
        alt: "Inyama yenhloko",
        options: ["Pap - R60", "uPhuthu - R50"]
    },
    {
        name: "Pork Trotters",
        image: "images/Pork Trotters.JPG",
        alt: "Pork trotters",
        options: ["Pap - R55", "No side - R40"]
    },
    {
        name: "Pap and Mogodu",
        image: "images/Mogodu and Pap.JPG",
        alt: "Pap and mogodu",
        options: [
            "Spinach - R55",
            "Salsa - R55",
            "Both sides - R60",
            "No side - R50"
        ]
    },
    {
        name: "Stuffed fatcakes",
        image: "images/Stuffed Fatcakes.jpg",
        alt: "Stuffed fatcakes",
        options: ["Achaar - R10", "No fill - R8"]
    },
    {
        name: "Extras",
        image: "",
        alt: "Drinks and extras",
        options: [
            "100% Mango juice - R25",
            "100% Apple juice - R25",
            "Sparkling water - R15",
            "Soft drinks - R20"
        ]
    }
];

const menuContainer = document.getElementById("menuContainer");

// Load menu items only when the container exists and is empty
if (menuContainer && menuContainer.children.length === 0) {
    menuData.forEach(function (item) {
        const article = document.createElement("article");
        article.className = "menu-item";

        const heading = document.createElement("h3");
        heading.textContent = item.name;
        article.appendChild(heading);

        if (item.image) {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.alt;
            img.className = "menu-image";
            article.appendChild(img);
        }

        const description = document.createElement("p");
        description.textContent =
            item.name === "Extras" ? "Drinks and extras:" : "Served with:";
        article.appendChild(description);

        const list = document.createElement("ul");

        item.options.forEach(function (option) {
            const li = document.createElement("li");
            li.textContent = option;
            list.appendChild(li);
        });

        article.appendChild(list);
        menuContainer.appendChild(article);
    });
}

// Search and filter menu items
const menuSearch = document.getElementById("menuSearch");
const searchMessage = document.getElementById("searchMessage");

if (menuSearch) {
    menuSearch.addEventListener("input", function () {
        const searchText = menuSearch.value.toLowerCase().trim();
        const menuItems = document.querySelectorAll(".menu-item");
        let visibleItems = 0;

        menuItems.forEach(function (item) {
            const matches = item.textContent.toLowerCase().includes(searchText);
            item.style.display = matches ? "" : "none";

            if (matches) {
                visibleItems++;
            }
        });

        if (searchMessage) {
            searchMessage.textContent = visibleItems === 0
                ? "Sorry, no matching menu items were found."
                : visibleItems + " menu item(s) found.";
        }
    });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageType = document.getElementById("messageType").value;
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !messageType || !message) {
            alert("Please complete all fields before submitting.");
            return;
        }

        const recipient = "zee_eats2020@gmail.com";
        const subject = encodeURIComponent("Contact Form: " + messageType);
        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nMessage Type: " + messageType +
            "\n\nMessage:\n" + message
        );

        window.location.href =
            "mailto:" + recipient +
            "?subject=" + subject +
            "&body=" + body;
    });
}
