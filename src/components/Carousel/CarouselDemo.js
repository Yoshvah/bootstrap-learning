import React, { useState } from 'react';

const CarouselDemo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselCode = `<!-- Basic Carousel -->
<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>`;

  const carouselWithIndicatorsCode = `<!-- Carousel with Indicators -->
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>`;

  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/800x400/007bff/ffffff?text=Slide+1",
      title: "First slide label",
      description: "Some representative placeholder content for the first slide."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/800x400/28a745/ffffff?text=Slide+2",
      title: "Second slide label",
      description: "Some representative placeholder content for the second slide."
    },
    {
      id: 3,
      image: "https://via.placeholder.com/800x400/dc3545/ffffff?text=Slide+3",
      title: "Third slide label",
      description: "Some representative placeholder content for the third slide."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Carousel</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Carousel Component</h2>
        <p>A slideshow component for cycling through elements—images or slides of text—like a carousel.</p>
        
        <h4 className="mt-4">Basic Carousel</h4>
        <div className="component-preview">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <img 
                    src={slide.image} 
                    className="d-block w-100" 
                    alt={slide.title}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{slide.title}</h5>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="carousel-control-prev" 
              type="button" 
              onClick={prevSlide}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              onClick={nextSlide}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{carouselCode}</pre>
        </div>
        
        <h4 className="mt-4">Carousel with Indicators</h4>
        <div className="component-preview">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === activeIndex ? 'active' : ''}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <img 
                    src={slide.image} 
                    className="d-block w-100" 
                    alt={slide.title}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <button 
              className="carousel-control-prev" 
              type="button" 
              onClick={prevSlide}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              onClick={nextSlide}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{carouselWithIndicatorsCode}</pre>
        </div>
        
        <h4 className="mt-4">Crossfade Animation</h4>
        <div className="component-preview">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div 
                  key={slide.id}
                  className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                >
                  <img 
                    src={slide.image} 
                    className="d-block w-100" 
                    alt={slide.title}
                    style={{ height: '400px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
            <button 
              className="carousel-control-prev" 
              type="button" 
              onClick={prevSlide}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              onClick={nextSlide}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselDemo;