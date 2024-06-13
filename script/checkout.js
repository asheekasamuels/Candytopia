document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.querySelector('[currentYear]');
    currentYearElement.textContent = new Date().getFullYear();

    let cart = JSON.parse(localStorage.getItem('checkout')) || [];
    let checkoutTable = document.querySelector('[table-checkout]');
    let productsWrapper = document.querySelector('[table-checkout]');
    let purchaseButton = document.querySelector('.purchaseButton');
    let clearButton = document.querySelector('.clearButton');

    function displayCartItems() {
        if (cart.length === 0) {
            productsWrapper.innerHTML = `
                <div class="col">
                    <div class="spinner-border" role="status"></div>
                    <p>No items found</p>
                </div>`;
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
    }

    function displayProducts() {
        productsWrapper.innerHTML = '';
        if (cart.length > 0) {
            cart.forEach((product, i) => {
                productsWrapper.innerHTML += `
                    <tr>
                        <th scope="row"><img src="${product.image}"></th>
                        <td>${product.name}</td>
                        <td value="${product.quantity}" class="quantity-input"></td> 
                        <td>R${product.price}</td>
                    </tr>`;
            });
        } else {
            productsWrapper.innerHTML = `
                <div class="col">
                    <div class="spinner-border" role="status"></div>
                    <p>No items found</p>
                </div>`;
        }
    }

    function removePurchase() {
        localStorage.removeItem('checkout');
        cart = [];
        displayCartItems();
    }

    purchaseButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Payment Successful');
            removePurchase();
        } else {
            alert('Your cart is empty.');
        }
    });

    clearButton.addEventListener('click', () => {
        if (cart.length > 0) {
            if (confirm('Are you sure you want to clear your cart?')) {
                removePurchase();
            }
        } else {
            alert('Your cart is already empty.');
        }
    });

    displayCartItems();
    displayProducts();
});

window.onload = () => {
    document.querySelector('[counter]').textContent = cart.length || 0;
};