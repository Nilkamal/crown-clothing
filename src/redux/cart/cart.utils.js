export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
    } else {
        return [...cartItems, { ...itemToAdd, quantity: 1 }]
    }

}