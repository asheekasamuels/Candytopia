// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        productName: "Gold and White Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento1.jpg"
            
                    },
                    {
                        productName: "Butterfly Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento2.jpg"
            
                    },
                    {
                        productName: "Pink Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento3.jpg"
            
                    },
                    {
                        productName: "Hello Kitty Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento4.jpg"
            
                    },
                    {
                        productName: "Sunflower Bento Cake + 5 cupcakes",
                        category: "Bento",
                        description: "Personalised bento cake with cupcakes",
                        amount: 250.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/bento5.jpg"
            
                    },
                    {
                        productName: "Frozen Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character1.jpg"
            
                    },
                    {
                        productName: "Cocomelon Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character2.jpg"
            
                    },
                    {
                        productName: "Paw Patrol Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character3.jpg"
            
                    },
                    {
                        productName: "SpongeBob Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character4.jpg"
            
                    },
                    {
                        productName: "Baby Shark Character Cake",
                        category: "Character",
                        description: "Personalised 1 tier cake",
                        amount: 350.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/character5.jpg"
            
                    },
                    {
                        productName: "Bluey Cupcakes",
                        categor: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake1.jpg"
            
                    },
                    {
                        productName: "Real Madrid Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake2.jpg"
            
                    },
                    {
                        productName: "Blue Personalised Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake3.jpg"
            
                    },
                    {
                        productName: "Pink Personalised Cupcakes",
                        category:"Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake4.jpg"
            
                    },
                    {
                        productName: "TwentyFirst Personalised Cupcakes",
                        category: "Cupcake",
                        description: "12 personalised cupcakes",
                        amount: 150.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake5.jpg"
            
                    },
                    {
                        productName: "Valentines Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart1.jpg"
            
                    },
                    {
                        productName: "Pink Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart2.jpg"
            
                    },
                    {
                        productName: "TwentyFirst Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart3.jpg"
            
                    },
                    {
                        productName: "Colorful Personalised Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart4.jpg"
            
                    },
                    {
                        productName: "Black and White Vintage Heart Cake",
                        category: "Vintage Heart",
                        description: "Heart shaped vintage cakes",
                        amount: 300.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/heart5.jpg"
                    },
                    {
                        productName: "Cocomelon Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number1.jpg"
                    },
                    {
                        productName: "Black Pink Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number2.jpg"
                    },
                    {
                        productName: "Minecraft Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number3.jpg"
                    },
                    {
                        productName: "Rainbow Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number4.jpg"
                    },
                    {
                        productName: "Wild Life Number Cake",
                        category: "Number",
                        description: "Number cakes created with cupcakes of your choice",
                        amount: 200.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/number5.jpg"
                    },
                    {
                        productName: "Floral Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier1.jpg"
                    },
                    {
                        productName: "Floral 70th Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier2.jpg"
                    },
                    {
                        productName: "Liverpool Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier3.jpg"
                    },
                    {
                        productName: "Bluey Two Tier Cake",
                        category: "Two Tier",
                        description: "Personalised 2 tier cake",
                        amount: 450.00,
                        img_url: "https://asheekasamuels.github.io/All-Images/images/tier4.jpg"
                    },
                    {
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