// create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products = 
    JSON.parse(localStorage.getItem('products')) 
    ? JSON.parse(localStorage.getItem('products'))
    :localStorage.setItem('products', 
        JSON.stringify(
        [
          {
            productName: "bento1",
            category: "Bento",
            description: "Personalised bento cake with cupcakes",
            amount: 250.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/bento1.jpg"

        },
        {
            productName: "Character1",
            category: "Character",
            description: "Personalised 1 tier cake",
            amount: 350.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/character1.jpg"
        },
        {
            productName: "Cupcake1",
            category: "Cupcake",
            description: "12 personalised cupcakes",
            amount: 150.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/cupcake1.jpg"

        },
        {
            productName: "Heart1",
            category: "Vintage Heart",
            description: "Heart shaped vintage cakes",
            amount: 300.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/heart1.jpg"

        },
        {
            productName: "Number1",
            category: "Number",
            description: "Number cakes created with cupcakes of your choice",
            amount: 200.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/number1.jpg"
        },
        {
            productName: "Tier1",
            category: "Two Tier",
            description: "Personalised 2 tier cake",
            amount: 450.00,
            img_url: "https://asheekasamuels.github.io/All-Images/images/tier1.jpg"
        }
        ]
    )
)

// current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

try {
    let products = JSON.pasre (
    localStorage.getItem('products')
)
} catch (err) {
    console.log(err)
}
recentProducts()