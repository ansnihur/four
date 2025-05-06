import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>Про нас</h2>
      <p>
        Ми — команда з чотирьох талановитих людей, які поєднують навички у сфері ІТ, дизайну,
        менеджменту і маркетингу. Але є ще п’ятий — наш незамінний ШІ.
      </p>

      <div className="about__team">
        <div className="member">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="Member 1" />
          <p>Анна — дизайнерка</p>
        </div>
        <div className="member">
          <img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt="Member 2" />
          <p>Ігор — програміст</p>
        </div>
        <div className="member">
          <img src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png" alt="Member 3" />
          <p>Марина — менеджерка</p>
        </div>
        <div className="member">
          <img src="https://cdn-icons-png.flaticon.com/512/706/706830.png" alt="Member 4" />
          <p>Олександр — маркетолог</p>
        </div>
        <div className="member ai">
          <img src="https://cdn-icons-png.flaticon.com/512/4712/4712105.png" alt="AI Assistant" />
          <p>ШІ — віртуальний помічник</p>
        </div>
      </div>
    </section>
  );
};

export default About;
