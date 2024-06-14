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
                <td><img src="${product.img_url}" alt="${product.productName}" style="max-width: 100px; max-height: 100px;"/></td>
                <td>${product.productName}</td>
                <td>${quantity}</td>
                <td>${amount}</td>
                <td>${total}</td>
            </tr>`;
    }
    checkoutTable.innerHTML = tableContent;
    try {
        document.querySelector('[sub-total]').textContent = cart.reduce((total, item) => total + item.amount, 0).toFixed(2);
    } catch (e) {
        tableContent.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
}

cartItems();

// Clearing the cart
function clearProducts() {
    localStorage.removeItem('checkout');
    alert('Items removed from your cart');
    cart = []; // Empty the cart array
    cartItems(); // Update the cart display
}

// Processing payment
function productPayment() {
    localStorage.removeItem('checkout');
    alert('Payment Successful');
    location.reload();
}

// Event listeners
document.querySelector('.purchaseButton').addEventListener('click', productPayment);
document.querySelector('.clearButton').addEventListener('click', clearProducts);
