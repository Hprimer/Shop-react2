import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import './Header.css'


function Header() {
	//let [cartOpen, setCartOpen] = useState(false) //хук состояния, по умолчанию false (корзина закрыта)
	return (
	<header className='container'>
		<div className='containr  navbarr'>
			<span className='logo col-4'>Happy House</span>
			
			<ul className='nav col-8'>
				<li >О нас</li>
				<li>Контакты</li>			
				<li>Кабинет</li>
				<li><FaShoppingCart />
			
					{/* // onClick={() => setCartOpen(cartOpen = !cartOpen)} 
					// className={`shop-cart-btn ${cartOpen && 'active'}`}/> */}
					{/* ///если cartOpen - true, то применяется еще и класс актив */} 
				</li>
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
