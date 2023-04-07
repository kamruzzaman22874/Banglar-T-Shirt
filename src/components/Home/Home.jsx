import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart , setCart] = useState([])
    const handleAddToCart = (tShirt) => {
        const newCart = [...cart, tShirt];
			setCart(newCart);
	};
	return (
		<div className='flex'>
			<div className='w-[75%] grid grid-cols-3 gap-5'>
				{tShirts.map((tShirt) => (
					<TShirt
						key={tShirts.id}
						tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>
				))}
			</div>
			<div className='w-[25%]'>
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Home;
