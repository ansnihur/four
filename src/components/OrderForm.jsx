import React, { useState } from 'react';
import './OrderForm.scss';

const OrderForm = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', comment: '' });
    }, 3000);
  };

  if (!visible) return null;

  return (
    <div className="order-form__overlay">
      <div className="order-form">
        <h2>Оформлення замовлення</h2>
        {submitted ? (
          <p className="success-message">Дякуємо! Ми скоро з вами звʼяжемося.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Ваше ім’я"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Ваш Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="comment"
              placeholder="Коментар до замовлення"
              value={formData.comment}
              onChange={handleChange}
            />
            <button type="submit">Надіслати</button>
            <button type="button" className="cancel" onClick={onClose}>
              Скасувати
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderForm;
