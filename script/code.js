// current year
let currentyear = new Date().getUTCFullYear()
document.querySelector('[currentYear]').textContent = currentyear
function recentProducts() {
  try {
    let arrSize = products.length
    let latestProducts = products.reverse().slice(0, arrSize >> 1)
    latestProducts.forEach(product => {
        wrapper.innerHTML += `
           <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.productName}">
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">${product.description}
                    </p>
                </div>
           </div>
        `
    })

  } catch (error) {
    wrapper.textContent ="please contact our administrator"
  }
}