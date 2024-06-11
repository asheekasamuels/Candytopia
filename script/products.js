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
                        productName: "Gold and White Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento1.jpg"
            
                    },
                    {
                        id: 2,
                        productName: "Butterfly Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento2.jpg"
            
                    },
                    {
                        id: 3,
                        productName: "Pink Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento3.jpg"
            
                    },
                    {

                        id: 4,
                        productName: "Hello Kitty Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento4.jpg"
            
                    },
                    {
                        id: 5,
                        productName: "Sunflower Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento5.jpg"
            
                    },
                    {
                        id: 6,
                        productName: "Frozen Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character1.jpg"
            
                    },
                    {
                        id: 7,
                        productName: "Cocomelon Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character2.jpg"
            
                    },
                    {
                        id: 8,
                        productName: "Paw Patrol Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character3.jpg"
            
                    },
                    {
                        id: 9,
                        productName: "SpongeBob Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character4.jpg"
            
                    },
                    {
                        id: 10,
                        productName: "Baby Shark Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character5.jpg"
            
                    },
                    {
                        id: 11,
                        productName: "Bluey Cupcakes",
                        categor: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake1.jpg"
            
                    },
                    {
                        id: 12,
                        productName: "Real Madrid Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake2.jpg"
            
                    },
                    {
                        id: 13,
                        productName: "Blue Personalised Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake3.jpg"
            
                    },
                    {
                        id: 14,
                        productName: "Pink Personalised Cupcakes",
                        category:"Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake4.jpg"
            
                    },
                    {
                        id: 15,
                        productName: "TwentyFirst Personalised Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake5.jpg"
            
                    },
                    {
                        id: 16,
                        productName: "Valentines Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart1.jpg"
            
                    },
                    {
                        id: 17,
                        productName: "Pink Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart2.jpg"
            
                    },
                    {
                        id: 18,
                        productName: "TwentyFirst Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart3.jpg"
            
                    },
                    {
                        id: 19,
                        productName: "Colorful Personalised Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart4.jpg"
            
                    },
                    {
                        id: 20,
                        productName: "Black and White Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart5.jpg"
                    },
                    {
                        id: 21,
                        productName: "Cocomelon Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number1.jpg"
                    },
                    {
                        id: 22,
                        productName: "Black Pink Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number2.jpg"
                    },
                    {
                        id: 23,
                        productName: "Minecraft Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number3.jpg"
                    },
                    {
                        id: 24,
                        productName: "Rainbow Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number4.jpg"
                    },
                    {
                        id: 25,
                        productName: "Wild Life Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number5.jpg"
                    },
                    {
                        id: 26,
                        productName: "Floral Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier1.jpg"
                    },
                    {
                        id: 27,
                        productName: "Floral 70th Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier2.jpg"
                    },
                    {
                        id: 28,
                        productName: "Liverpool Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier3.jpg"
                    },
                    {
                        id: 29,
                        productName: "Bluey Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier4.jpg"
                    },
                    {
                        id: 30,
                        productName: "Colorful Daisy Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier5.jpg"
                    },
                ]
            )
        )
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear();
function recentProducts() {
    try {
        products.forEach(product => {
            wrapper.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.amount}</p>
                        <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                </div>
            `;
        });
    } catch (e) {
        wrapper.textContent = "Please contact our administrator";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}
recentProducts();
// keyup
searchProduct.addEventListener('keyup', () => {
    try {
        if (searchProduct.value.length < 1) {
            displayProducts(products)
        }
        let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value))
        displayProducts(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${searchProduct.value} product was not found`)
    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})
// Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!products) throw new Error('Please try again later')
        if (!isToggle) {
            products.sort((a, b) => b.amount - a.amount)
            sortingByAmount.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            products.sort((a, b) => a.amount - b.amount)
            sortingByAmount.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayProducts(products)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})
// Add to cart
function addToCart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Unable to add to cart")
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}
// Search product
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.productName.toLowerCase().includes(productSearch.value.toLowerCase());
        });
        displayProducts(searchItem);
    } catch (e) {
        alert('Function is under maintenance');
    }
});