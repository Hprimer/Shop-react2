import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'
import { Link } from 'react-router';


function Header({orders, onDelete}) {
	//let [cartOpen, setCartOpen] = useState(false) //хук состояния, по умолчанию false (корзина закрыта)
	return (
	<header className='container'>
		<div className='containr  navbarr'>
			<span className='logo col-4'>
				<Link to='/main' className='link'>
					Happy House
				</Link>
			</span>
			
			<ul className='nav col-8'>
				<li ><Link to='/main' className='link'>Главная </Link></li>						
				<li>Кабинет</li>				
				<li className='cart-link'>
					<Link to="/cart" className='link'><FaShoppingCart/>({orders.length})</Link>
			
					{/* // onClick={() => setCartOpen(cartOpen = !cartOpen)} 
					// className={`shop-cart-btn ${cartOpen && 'active'}`}/> */}
					{/* ///если cartOpen - true, то применяется еще и класс актив */} 
				</li>
				<li><Link to='/login' className='link'>Выход</Link></li>
			</ul> 
		</div>
			{/* {cartOpen && (
				<div className='shop-cart'>
					{props.orders.length > 0 ?
					showOrders(props) : showNothing()}
				</div>
			)} */}
			
	</header>
	)
}

export default Header
