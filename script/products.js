// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        id: 1,
                        productName: "BUBS Cool Passion Pineapple Foam Skulls",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSCoolPassionPineappleFoamSkulls.png"
            
                    },
                    {
                        id: 2,
                        productName: "BUBS Raspberry And Blueberry Oval",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSRaspberryAndBlueberryOvals.png"
            
                    },
                    {
                        id: 3,
                        productName: "BUBS Dizzy Skulls",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSDizzySkulls.png"
            
                    },
                    {

                        id: 4,
                        productName: "BUBS Sour Raspberry And Citrus Foam Skulls",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSSourRaspberryAndCitrusFoamSkulls.png"
            
                    },
                    {
                        id: 5,
                        productName: "BUBS Cool Cola Skulls",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBScoolColaSkulls.png"
            
                    },
                    {
                        id: 6,
                        productName: "BUBS Sour Squids",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSSourSquids.png"
            
                    },
                    {
                        id: 7,
                        productName: "BUBS Sour Tutti Frutti Foam Diamonds",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSSourTuttiFruttiFoamDiamonds.png"
            
                    },
                    {
                        id: 8,
                        productName: "BUBS Sweet And Sour Mix",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSSweetAndSourMix.png"

            
                    },
                    {
                        id: 9,
                        productName: "BUBS Wild Strawberry Pomegranate Ovals",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSWildStrawberryPomegranateOvals.png"
            
                    },
                    {
                        id: 10,
                        productName: "BUBS Cool Raspberry Foam Skulls",
                        category: "BUBS",
                        description: "Sour Candy",
                        amount: 80.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/BUBSCoolRaspberryFoamSkulls.png"
            
                    }
                ]
            )
        )
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear();

function recentProducts(products) {
    try {
        wrapper.innerHTML = ''; // Clear the wrapper
        products.forEach(product => {
            wrapper.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.id}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.amount}</p>
                        <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                    </div>
                </div>
            `;
        });
    }catch (e) {
            tableContent.innerHTML = `
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status"></div>
                <p>No Products Found</p>
            </div>
            `;
        }
    }

recentProducts(products);

// Search product
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.productName.toLowerCase().includes(productSearch.value.toLowerCase());
        });
        recentProducts(searchItem); // Call recentProducts with filtered items
    } catch (e) {
        tableContent.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
});

// Sorting by ascending and descending
let productSort = document.querySelector('[sorting]');
let highest = false;
productSort.addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.amount - a.amount);
            highest = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            highest = false;
        }
        recentProducts(products); // Call recentProducts with sorted items
    } catch (e) {
        tableContent.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
});

// Add to cart
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
    try {
        cart.push(product);
        localStorage.setItem('checkout', JSON.stringify(cart));
        document.querySelector('[counter]').textContent = cart.length || 0;
    } catch (e) {
        tableContent.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
}

window.onload = () => {
    document.querySelector('[counter]').textContent = cart.length || 0;
};