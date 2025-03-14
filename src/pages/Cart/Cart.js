import React from 'react';
import './Cart.css';

function Cart({ orders, onDelete }) {
  return (
    <div className='cart'>
      <h2>Корзина</h2>
      {orders.length === 0 ? (
        <p>Ваша корзина пуста</p>
      ) : (
        <ul className='cart_list'>
          {orders.map((order) => (
            <li className='cart_item' key={order.id}>
              <img className='cart_item__img' src={order.image_path} alt={order.name} />
              <div>
                <h3>{order.name}</h3>
                <p>{order.price}$</p>
              </div>
              <button onClick={() => onDelete(order.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;