import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<Link className='mr-5' to='/'>
				Home
			</Link>
			<Link className='mr-5' to='/review'>
				Order Review
			</Link>
			<Link className='mr-5' to='/about'>
				About
			</Link>
			<Link className='mr-5' to='/contact'>
				Contact
			</Link>
		</nav>
	);
};

export default Header;
