import OrderForm from './components/OrderForm';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Cart from './components/Cart';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.scss';

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);

  const handleAdd = (service) => setCartItems((prev) => [...prev, service]);
  const handleRemove = (index) => setCartItems((prev) => prev.filter((_, i) => i !== index));

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Services onAdd={handleAdd} />
      <Cart
        cartItems={cartItems}
        onRemove={handleRemove}
        onCheckout={() => setShowForm(true)}
      />
      <OrderForm visible={showForm} onClose={() => setShowForm(false)} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
