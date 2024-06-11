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