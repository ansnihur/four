import React from 'react';
import './Services.scss';

const serviceList = [
  { id: 1, title: 'Автоматизація з ШІ', price: 100 },
  { id: 2, title: 'ІТ-консалтинг', price: 80 },
  { id: 3, title: 'CRM-супровід', price: 60 },
  { id: 4, title: 'Віртуальна організація під ключ', price: 150 },
];

const Services = ({ onAdd }) => {
  return (
    <section className="services" id="services">
      <h2>Наші послуги</h2>
      <div className="services__list">
        {serviceList.map((service) => (
          <div className="service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.price} ₴</p>
            <button onClick={() => onAdd(service)}>Додати до корзини</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
