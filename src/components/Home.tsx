const Home = () => {
  return (
<section className="hero">
      <div className="hero-content">
        <h2>Brewed To Perfection, Served With Love</h2>
        <p>
          Indulge in handcrafted coffee, freshly baked pastries, and a welcoming
          atmosphere designed to inspire and unwind.
        </p>
        <div className="buttons">
          <button>Order Online</button>
          <button className="locationButton">Find a Location</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="coffee-cup.png" alt="Coffee Cup" />
      </div>
    </section>
  );
};

export default Home;