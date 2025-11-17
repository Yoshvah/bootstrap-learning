import React from 'react';

const GridSystem = () => {
  const equalWidthCode = `<!-- Equal-width columns -->
<div class="container">
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>`;

  const responsiveCode = `<!-- Responsive columns -->
<div class="container">
  <div class="row">
    <div class="col-md-8">col-md-8</div>
    <div class="col-md-4">col-md-4</div>
  </div>
</div>`;

  const mixedCode = `<!-- Mixed columns -->
<div class="container">
  <div class="row">
    <div class="col-md">col-md</div>
    <div class="col-md">col-md</div>
    <div class="col-md">col-md</div>
  </div>
</div>

<!-- Auto-layout columns -->
<div class="container">
  <div class="row">
    <div class="col">1 of 3</div>
    <div class="col-6">2 of 3 (wider)</div>
    <div class="col">3 of 3</div>
  </div>
</div>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Grid System</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Grid System</h2>
        <p>Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content.</p>
        
        <h4 className="mt-4">Equal-width columns</h4>
        <div className="component-preview grid-example">
          <div className="row text-center">
            <div className="col">Column</div>
            <div className="col">Column</div>
            <div className="col">Column</div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{equalWidthCode}</pre>
        </div>
        
        <h4 className="mt-4">Responsive columns</h4>
        <div className="component-preview grid-example">
          <div className="row text-center">
            <div className="col-md-8">col-md-8</div>
            <div className="col-md-4">col-md-4</div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{responsiveCode}</pre>
        </div>
        
        <h4 className="mt-4">Mixed columns</h4>
        <div className="component-preview grid-example">
          <div className="row text-center">
            <div className="col-md">col-md</div>
            <div className="col-md">col-md</div>
            <div className="col-md">col-md</div>
          </div>
          
          <div className="row text-center mt-3">
            <div className="col">1 of 3</div>
            <div className="col-6">2 of 3 (wider)</div>
            <div className="col">3 of 3</div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{mixedCode}</pre>
        </div>

        <h4 className="mt-4">Grid Breakpoints</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Class infix</th>
                <th>Dimensions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X-Small</td>
                <td><em>None</em></td>
                <td>&lt;576px</td>
              </tr>
              <tr>
                <td>Small</td>
                <td>sm</td>
                <td>≥576px</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>md</td>
                <td>≥768px</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>lg</td>
                <td>≥992px</td>
              </tr>
              <tr>
                <td>Extra large</td>
                <td>xl</td>
                <td>≥1200px</td>
              </tr>
              <tr>
                <td>Extra extra large</td>
                <td>xxl</td>
                <td>≥1400px</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GridSystem;