import React from 'react';
import './Cart.scss';

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="cart" id="order">
      <h2>Корзина замовлення</h2>
      {cartItems.length === 0 ? (
        <p>Корзина порожня</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} — {item.price} ₴
                <button onClick={() => onRemove(index)}>Повернути</button>
              </li>
            ))}
          </ul>
          <p className="cart__total">Разом: {total} ₴</p>
          <button className="cart__submit" onClick={onCheckout}>
            Оформити замовлення
            </button>
        </>
      )}
    </section>
  );
};

export default Cart;
