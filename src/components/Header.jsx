import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToOrder = () => {
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">🧠Чотири Людини + ШІ</div>

      <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsOpen(false)}>Про нас</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Послуги</a>
        <a href="#contacts" onClick={() => setIsOpen(false)}>Контакти</a>
        <button className="header__button mobile" onClick={scrollToOrder}>
          Замовити
        </button>
      </nav>

      <button className="header__button desktop" onClick={scrollToOrder}>
        Замовити послугу
      </button>

      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
