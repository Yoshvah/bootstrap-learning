import React from 'react';

const ColorSystem = () => {
  const colorCodeExample = `<!-- Bootstrap Color Classes -->
<div class="bg-primary text-white">Primary background</div>
<div class="bg-secondary text-white">Secondary background</div>
<div class="bg-success text-white">Success background</div>
<div class="bg-danger text-white">Danger background</div>
<div class="bg-warning text-dark">Warning background</div>
<div class="bg-info text-white">Info background</div>

<!-- Text Colors -->
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Color System</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Color</h2>
        <p>Bootstrap's color palette has been designed to work harmoniously with each other.</p>
        
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-primary">Primary</div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-secondary">Secondary</div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-success">Success</div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-danger">Danger</div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-warning text-dark">Warning</div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="color-box bg-info">Info</div>
          </div>
        </div>

        <h4 className="mt-4">How to use Bootstrap Colors</h4>
        <div className="code-block">
          <pre>{colorCodeExample}</pre>
        </div>
      </section>
    </div>
  );
};

export default ColorSystem;