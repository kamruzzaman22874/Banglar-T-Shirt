import React from 'react';

const TShirt = ({ tShirt, handleAddToCart }) => {
	const { picture, name, price } = tShirt;
	return (
		<div className='card h-[450px] bg-gray-300 shadow-xl mt-5'>
			<figure>
				<img
					className='h-[300px] w-full rounded border bg-slate-400 p-4'
					src={picture}
					alt='Shoes'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title text-center'>{name}</h2>
				<p>Price : &{price}</p>
				<div
					onClick={() => handleAddToCart(tShirt)}
					className='card-actions justify-end'>
					<button className='btn btn-primary  w-full mb-0'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default TShirt;
