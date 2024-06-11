
const addToCartButtons = document.querySelectorAll('.addToCartBtn');


addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});


function addToCart(event) {
    
    const productItem = event.target.closest('.item');
    
    
    const productName = productItem.querySelector('h2').innerText;
    const productPrice = productItem.querySelector('p').innerText;

    
    const item = {
        name: productName,
        price: productPrice
    };

    
    const totalElement = document.querySelector('.total');
    let totalCount = parseInt(totalElement.innerText);
    totalCount++;
    totalElement.innerText = totalCount;

    
}
