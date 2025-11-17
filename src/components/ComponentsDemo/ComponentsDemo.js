import React from 'react';

const ComponentsDemo = () => {
  const buttonsCode = `<!-- Basic Buttons -->
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>

<!-- Outline Buttons -->
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>

<!-- Button Sizes -->
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>`;

  const alertsCode = `<!-- Basic Alerts -->
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>

<!-- Alert with Link -->
<div class="alert alert-warning" role="alert">
  A simple warning alert with <a href="#" class="alert-link">an example link</a>.
</div>`;

  const cardsCode = `<!-- Basic Card -->
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

<!-- Card with Image -->
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Components</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Components</h2>
        <p>Bootstrap comes with nearly two dozen components that are ready to use right out of the box.</p>
        
        <h4 className="mt-4">Buttons</h4>
        <div className="component-preview">
          <button type="button" className="btn btn-primary me-2">Primary</button>
          <button type="button" className="btn btn-secondary me-2">Secondary</button>
          <button type="button" className="btn btn-success me-2">Success</button>
          <button type="button" className="btn btn-danger me-2">Danger</button>
          <button type="button" className="btn btn-warning me-2">Warning</button>
          <button type="button" className="btn btn-info me-2">Info</button>
          <button type="button" className="btn btn-outline-primary me-2">Outline Primary</button>
          <button type="button" className="btn btn-outline-secondary me-2">Outline Secondary</button>
        </div>
        
        <div className="code-block">
          <pre>{buttonsCode}</pre>
        </div>
        
        <h4 className="mt-4">Alerts</h4>
        <div className="component-preview">
          <div className="alert alert-primary" role="alert">
            A simple primary alert—check it out!
          </div>
          <div className="alert alert-success" role="alert">
            A simple success alert—check it out!
          </div>
          <div className="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <div className="alert alert-warning" role="alert">
            A simple warning alert with <a href="#" className="alert-link">an example link</a>.
          </div>
        </div>
        
        <div className="code-block">
          <pre>{alertsCode}</pre>
        </div>
        
        <h4 className="mt-4">Cards</h4>
        <div className="component-preview">
          <div className="card me-3" style={{width: '18rem', display: 'inline-block'}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
          
          <div className="card" style={{width: '18rem', display: 'inline-block'}}>
            <img src="https://via.placeholder.com/286x180" className="card-img-top" alt="placeholder" />
            <div className="card-body">
              <h5 className="card-title">Card with image</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{cardsCode}</pre>
        </div>
      </section>
    </div>
  );
};

export default ComponentsDemo;