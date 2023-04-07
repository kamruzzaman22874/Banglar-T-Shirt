import React from 'react';

const Cart = ({ cart }) => {
    let price = 0;
    for (const product of cart) {
        price += product.price;
    } 
	return (
		<div className='bg-amber-400 p-3 ml-3 rounded mt-5'>
			<h2 className='text-xl'>Cart summary : {cart.length}</h2>
			<h2>Price: ${price}</h2>
		</div>
	);
};

export default Cart;
