import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contacts">
      <h2>Контакти</h2>
      <p>Звʼяжіться з нами будь-яким зручним способом!</p>
      
      <div className="contact__info">
        <p><strong>Email:</strong> fourpeople.agency@example.com</p>
        <p><strong>Телефон:</strong> +380 99 123 4567</p>
        <p><strong>Локація:</strong> Київ, Україна (коворкінг)</p>
      </div>

      <form
        className="contact__form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Повідомлення надіслано!');
          e.target.reset();
        }}
      >
        <input type="text" placeholder="Ваше ім’я" required />
        <input type="email" placeholder="Ваш Email" required />
        <textarea placeholder="Ваше повідомлення" required />
        <button type="submit">Надіслати</button>
      </form>
    </section>
  );
};

export default Contact;
