// product.js

document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');
    const cartItems = {};

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productContainer = event.target.closest('.item');
            const productName = productContainer.querySelector('.productName').textContent;
            const productPrice = parseFloat(productContainer.querySelector('.productPrice').textContent);
            const productImage = productContainer.querySelector('img').src;

            addToCart(productName, productPrice, productImage);
        });
    });

    function addToCart(name, price, image) {
        if (cartItems[name]) {
            cartItems[name].quantity++;
            cartItems[name].total = cartItems[name].price * cartItems[name].quantity;
        } else {
            cartItems[name] = {
                price: price,
                quantity: 1,
                total: price,
                image: image
            };
        }
        updateCart();
    }

    function updateCart() {
        const listCart = document.querySelector('.listCart');
        listCart.innerHTML = '';
        let overallTotal = 0;

        for (const itemName in cartItems) {
            const item = cartItems[itemName];
            overallTotal += item.total;

            const listItem = document.createElement('div');
            listItem.classList.add('cartItem');
            listItem.innerHTML = `
                <img src="${item.image}" alt="${itemName}">
                <div class="itemDetails">
                    <p>${itemName} - ${item.price} x <input type="number" min="1" value="${item.quantity}" class="quantityInput" data-name="${itemName}"></p>
                    <p>Total: ${item.total}</p>
                    <button class="removeBtn" data-name="${itemName}">Remove</button>
                </div>
            `;

            listCart.appendChild(listItem);

            const quantityInput = listItem.querySelector('.quantityInput');
            quantityInput.addEventListener('change', function(event) {
                const itemName = event.target.dataset.name;
                const newQuantity = parseInt(event.target.value);
                cartItems[itemName].quantity = newQuantity;
                cartItems[itemName].total = cartItems[itemName].price * newQuantity;
                updateCart();
            });
        }

        const totalPrice = document.createElement('div');
        totalPrice.innerHTML = `Overall Total: ${overallTotal}`;
        listCart.appendChild(totalPrice);

        const removeButtons = document.querySelectorAll('.removeBtn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                const itemName = event.target.dataset.name;
                delete cartItems[itemName];
                updateCart();
            });
        });

        const iconCart = document.querySelector('.iconCart');
        const totalItems = Object.keys(cartItems).length;
        iconCart.querySelector('.total').textContent = totalItems;
    }
});
