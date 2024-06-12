// Current year
document.querySelector('[currentYear]').textContent = new Date().getFullYear();

// Getting cart items from localStorage
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
let checkoutTable = document.querySelector('[table-checkout]');

// Displaying cart items
function cartItems() {
    if (cart.length === 0) {
        checkoutTable.innerHTML = "<tr><td colspan='4'>Add items to your cart</td></tr>";
        return;
    }
    let cartProducts = cart.reduce((groupedItems, item) => {
        if (!groupedItems[item.id]) {
            groupedItems[item.id] = [];
        }
        groupedItems[item.id].push(item);
        return groupedItems;
    }, {});
    let tableContent = "";
    for (let id in cartProducts) {
        let productGroup = cartProducts[id];
        let product = productGroup[0];
        let quantity = productGroup.length;
        let amount = product.amount;
        let total = amount * quantity;
        tableContent +=
            `<tr>
                <td><img src="${product.image}" alt="${product.productName}" /></td>
                <td>${product.productName}</td>
                <td>${quantity}</td>
                <td>${amount}</td>
            </tr>`;
    }
    checkoutTable.innerHTML = tableContent;
}

cartItems();

// Clearing the cart
function clearProducts() {
    localStorage.removeItem('checkout');
    alert('Press "OK" to remove items from your cart');
    location.reload();
}

// Processing payment
function productPayment() {
    localStorage.removeItem('checkout');
    alert('Payment Successful');
    location.reload();
}

// create a function that returns only unique objects from an array and gets rid of the duplicates.
function getUniqueProducts(cart) {
    // get the products from the cart and remove duplicates
    let uniqueProducts = Array.from(new Set(cart.map(product => product.productName)))
        .map(name => cart.find(product => product.productName === name));
    // display only the unique products
    return uniqueProducts;
}

// displays the unique products only
function displayUniqueProducts() {
    let productsWrapper = document.querySelector('[recentProducts]');
    productsWrapper.innerHTML = '';

    if (cart) {
        let uniqueCart = getUniqueProducts(cart);

        uniqueCart.forEach((product, i) => {
            productsWrapper.innerHTML += `
                <div class="col">
                    <img src="${product.image}" alt="${product.productName}" />
                    <p>${product.productName}</p>
                    <p>Quantity: ${product.quantity}</p>
                    <p>Price: R${product.price}</p>
                </div>
            `;
        });
    } else {
        productsWrapper.innerHTML = `<div class="col">
            <div class="spinner-border" role="status"></div>
            <p>no items found</p>
        </div>`;
    }
}

displayUniqueProducts();

// Event listener for purchase button
let btnPurchase = document.querySelector('[purchase-remove]');
btnPurchase.addEventListener('click', purchasedItem);

// Function to remove purchased items from localStorage and cart
function purchasedItem() {
    if (cart.length > 0) {
        alert('Thank you for purchasing.');
        localStorage.removeItem('checkout');
        cart = []; // Empty the cart array
        cartItems(); // Update the cart display
    } else {
        alert('Please add products to your cart.');
    }
}

// Function to calculate total price
function calculateTotal(products) {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        total += product.price;
    }

    return total;
}

// Calculate and display total price
let totalPriceElement = document.querySelector('[display-total]');
totalPriceElement.textContent = `Total Price: R${calculateTotal(cart)}`;

