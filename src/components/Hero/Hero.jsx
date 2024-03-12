import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-info-container">
        <h3 className="hero-head">Güncel Yazılım Kursları</h3>
        <p className="hero-info">Online veya Yüzyüze !!!</p>
        <span className="hero-signup" href="#">Hemen Kaydol</span>
      </div>
      <div>
        <img className="hero-image" src="/public/brain.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
