/* =========================================
   OM SAI TRADERS
   PRODUCT DATABASE + WEBSITE FUNCTIONS
========================================= */


/* =========================================
   WHATSAPP NUMBER
========================================= */

const whatsappNumber = "917233962494";


/* =========================================
   PRODUCT DATABASE
========================================= */

const products = [

    /* =====================
       GROCERY
    ====================== */

    {
        id: 1,
        name: "Khushboo Aata",
        quantity: "5 kg",
        price: 215,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 2,
        name: "Khushboo Aata",
        quantity: "10 kg",
        price: 420,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 3,
        name: "Gopal Aata",
        quantity: "5 kg",
        price: 245,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 4,
        name: "Aashirwad Aata",
        quantity: "5 kg",
        price: 310,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 5,
        name: "Aashirwad Aata",
        quantity: "10 kg",
        price: 600,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 6,
        name: "Fortune Besan",
        quantity: "500 gm",
        price: 53,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 7,
        name: "Sooji",
        quantity: "500 gm",
        price: 35,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 8,
        name: "Maida",
        quantity: "500 gm",
        price: 35,
        category: "Grocery",
        icon: "🌾"
    },

    {
        id: 9,
        name: "Fortune Cotton Seed Oil",
        quantity: "1 L",
        price: 195,
        category: "Grocery",
        icon: "🫗"
    },

    {
        id: 10,
        name: "Fortune Sunflower Seed Oil",
        quantity: "1 L",
        price: 210,
        category: "Grocery",
        icon: "🫗"
    },

    {
        id: 11,
        name: "Fortune Soyabean Oil",
        quantity: "1 L",
        price: 170,
        category: "Grocery",
        icon: "🫗"
    },

    {
        id: 12,
        name: "Fortune Mustard Oil",
        quantity: "1 L",
        price: 230,
        category: "Grocery",
        icon: "🫗"
    },


    /* =====================
       BEVERAGES
    ====================== */

    {
        id: 13,
        name: "Sprite",
        quantity: "1 L",
        price: 50,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 14,
        name: "Sprite",
        quantity: "750 ml",
        price: 40,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 15,
        name: "Sprite",
        quantity: "2 L",
        price: 90,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 16,
        name: "Thums Up",
        quantity: "750 ml",
        price: 40,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 17,
        name: "Thums Up",
        quantity: "1 L",
        price: 50,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 18,
        name: "Thums Up",
        quantity: "2 L",
        price: 90,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 19,
        name: "Jeera Soda",
        quantity: "1 Bottle",
        price: 10,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 20,
        name: "Campa",
        quantity: "185 ml",
        price: 10,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 21,
        name: "Campa",
        quantity: "500 ml",
        price: 20,
        category: "Beverages",
        icon: "🥤"
    },

    {
        id: 22,
        name: "Sting",
        quantity: "250 ml",
        price: 20,
        category: "Beverages",
        icon: "🥤"
    },


    /* =====================
       SNACKS
    ====================== */

    {
        id: 23,
        name: "Parle G",
        quantity: "₹5 Pack",
        price: 5,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 24,
        name: "Parle G",
        quantity: "₹10 Pack",
        price: 10,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 25,
        name: "Britannia Marie Gold",
        quantity: "₹5 Pack",
        price: 5,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 26,
        name: "Britannia Good Day",
        quantity: "₹5 Pack",
        price: 5,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 27,
        name: "Britannia Good Day",
        quantity: "₹10 Pack",
        price: 10,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 28,
        name: "Parle Monaco",
        quantity: "₹5 Pack",
        price: 5,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 29,
        name: "Parle KrackJack",
        quantity: "₹5 Pack",
        price: 5,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 30,
        name: "Britannia Bourbon",
        quantity: "₹10 Pack",
        price: 10,
        category: "Snacks",
        icon: "🍪"
    },

    {
        id: 31,
        name: "Oreo",
        quantity: "₹10 Pack",
        price: 10,
        category: "Snacks",
        icon: "🍪"
    }

];


/* =========================================
   CART
========================================= */

let cart = [];


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList = products) {

    const productGrid =
        document.getElementById("productGrid");


    if (productList.length === 0) {

        productGrid.innerHTML = `
            <div class="no-products">
                <h3>😔 Product not found</h3>
                <p>Try searching for another product.</p>
            </div>
        `;

        return;
    }


    productGrid.innerHTML = productList.map(product => `

        <div
            class="product-card"
            data-category="${product.category}"
        >

            <div class="product-icon">
                ${product.icon}
            </div>

            <span class="product-category">
                ${product.category}
            </span>

            <h3>
                ${product.name}
            </h3>

            <p>
                ${product.quantity}
            </p>

            <div class="product-bottom">

                <strong>
                    ₹${product.price}
                </strong>

                <button
                    onclick="addToCart(${product.id})"
                >
                    + Add
                </button>

            </div>

        </div>

    `).join("");
}


/* =========================================
   ADD PRODUCT TO CART
========================================= */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    const existingProduct =
        cart.find(
            item => item.id === productId
        );


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            id: product.id,

            name: product.name,

            productQuantity: product.quantity,

            price: product.price,

            quantity: 1

        });

    }


    updateCart();

    openCart();

}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartCount.innerText = "0";

        cartTotal.innerText = "₹0";

        return;
    }


    let total = 0;

    let totalItems = 0;


    let html = "";


    cart.forEach((product, index) => {

        const itemTotal =
            product.price *
            product.quantity;


        total += itemTotal;

        totalItems += product.quantity;


        html += `

            <div class="cart-item">

                <div class="cart-item-info">

                    <strong>
                        ${product.name}
                    </strong>

                    <span>
                        ${product.productQuantity}
                        × ₹${product.price}
                    </span>

                </div>


                <div class="cart-quantity">

                    <button
                        onclick="changeQuantity(${index}, -1)"
                    >
                        −
                    </button>

                    <strong>
                        ${product.quantity}
                    </strong>

                    <button
                        onclick="changeQuantity(${index}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });


    cartItems.innerHTML = html;

    cartCount.innerText = totalItems;

    cartTotal.innerText =
        "₹" + total;

}


/* =========================================
   CHANGE CART QUANTITY
========================================= */

function changeQuantity(index, amount) {

    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("open");

}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("open");

}


/* =========================================
   SEND CART TO WHATSAPP
========================================= */

function sendCartToWhatsApp() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add some products first."
        );

        return;
    }


    let message =
        "Hello Om Sai Traders 👋\n\n" +
        "I would like to place an order:\n\n";


    let total = 0;


    cart.forEach((product, index) => {

        const itemTotal =
            product.price *
            product.quantity;


        total += itemTotal;


        message +=
            (index + 1) +
            ". " +
            product.name +
            " (" +
            product.productQuantity +
            ")" +
            " × " +
            product.quantity +
            " = ₹" +
            itemTotal +
            "\n";

    });


    message +=
        "\n--------------------\n" +
        "Estimated Total: ₹" +
        total +
        "\n\n" +
        "Please confirm product availability, " +
        "final total and delivery details.\n\n" +
        "Thank you 🙏";


    const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(url, "_blank");

}


/* =========================================
   CATEGORY FILTER
========================================= */

function filterProducts(category) {

    const filteredProducts =
        products.filter(
            product =>
                product.category === category
        );


    displayProducts(filteredProducts);


    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   SHOW ALL PRODUCTS
========================================= */

function showAllProducts() {

    displayProducts(products);

    document
        .getElementById("searchBox")
        .value = "";

}


/* =========================================
   SEARCH PRODUCTS
========================================= */

function searchProducts() {

    const search =
        document
            .getElementById("searchBox")
            .value
            .toLowerCase()
            .trim();


    if (search === "") {

        displayProducts(products);

        return;
    }


    const filteredProducts =
        products.filter(product => {

            const name =
                product.name.toLowerCase();

            const category =
                product.category.toLowerCase();

            const quantity =
                product.quantity.toLowerCase();


            return (
                name.includes(search) ||
                category.includes(search) ||
                quantity.includes(search)
            );

        });


    displayProducts(filteredProducts);

}


/* =========================================
   SCROLL TO PRODUCTS
========================================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

displayProducts(products);

updateCart();