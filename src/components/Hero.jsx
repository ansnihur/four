import React from 'react';
import './Hero.scss';

const Hero = () => {
  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Чотири Людини + ШІ = Ефективна команда</h1>
        <p>
          Ми — невелика, але потужна команда, яка використовує сучасні технології та штучний інтелект,
          щоб вирішувати завдання швидко, якісно і творчо.
        </p>
        <button onClick={scrollToOrder}>Замовити послугу</button>
      </div>
      <div className="hero__image">
        <img src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png" alt="Team and AI" />
      </div>
    </section>
  );
};

export default Hero;
