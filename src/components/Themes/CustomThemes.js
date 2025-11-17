import React from 'react';

const CustomThemes = () => {
  const sassVariablesCode = `// Customize Bootstrap with Sass variables

// Colors
$primary: #c7307c;
$secondary: #6f42c1;
$success: #198754;
$info: #0dcaf0;
$warning: #ffc107;
$danger: #dc3545;

// Typography
$font-family-sans-serif: 'Inter', system-ui, -apple-system;
$font-size-base: 1.1rem;
$line-height-base: 1.6;

// Spacing
$spacer: 1rem;
$spacers: (
  0: 0,
  1: $spacer * .25,
  2: $spacer * .5,
  3: $spacer,
  4: $spacer * 1.5,
  5: $spacer * 3,
);

// Borders
$border-radius: .5rem;
$border-radius-sm: .25rem;
$border-radius-lg: .75rem;

// Buttons
$btn-padding-y: .75rem;
$btn-padding-x: 1.5rem;
$btn-border-radius: $border-radius;`;

  const cssVariablesCode = `/* Customize with CSS variables */
:root {
  --bs-primary: #c7307c;
  --bs-secondary: #6f42c1;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  
  --bs-font-sans-serif: 'Inter', system-ui, -apple-system;
  --bs-body-font-size: 1.1rem;
  --bs-border-radius: .5rem;
  --bs-btn-border-radius: .5rem;
}

/* Usage */
.custom-theme {
  --bs-primary: #c7307c;
  --bs-secondary: #6f42c1;
}`;

  const sassUsageCode = `// Import Bootstrap
@import "bootstrap/scss/bootstrap";

// Or import specific components
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";

// Your customizations
$custom-colors: (
  "custom": #8b5cf6,
  "custom-dark": #5b21b6
);

// Merge with theme colors
$theme-colors: map-merge($theme-colors, $custom-colors);

// Import remaining Bootstrap
@import "bootstrap/scss/root";
@import "bootstrap/scss/reboot";
// ... import other components as needed`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Custom Themes</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Customizing Bootstrap</h2>
        <p>Learn how to customize Bootstrap's appearance using Sass variables and CSS custom properties.</p>
        
        <h4 className="mt-4">Sass Variables</h4>
        <div className="component-preview">
          <p>Bootstrap is built with Sass and uses Sass variables for global style preferences.</p>
          <div className="row">
            <div className="col-md-6">
              <div className="color-box" style={{ backgroundColor: '#c7307c' }}>Custom Primary</div>
            </div>
            <div className="col-md-6">
              <div className="color-box" style={{ backgroundColor: '#6f42c1' }}>Custom Secondary</div>
            </div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{sassVariablesCode}</pre>
        </div>
        
        <h4 className="mt-4">CSS Custom Properties</h4>
        <div className="component-preview">
          <p>Bootstrap includes many CSS custom properties (variables) for real-time customization.</p>
          <div className="custom-theme-preview p-3 border rounded">
            <button className="btn btn-primary me-2">Primary Button</button>
            <button className="btn btn-secondary me-2">Secondary Button</button>
            <button className="btn btn-success">Success Button</button>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{cssVariablesCode}</pre>
        </div>
        
        <h4 className="mt-4">Sass Usage Example</h4>
        <div className="component-preview">
          <p>Here's how to properly import and customize Bootstrap with Sass:</p>
        </div>
        
        <div className="code-block">
          <pre>{sassUsageCode}</pre>
        </div>
        
        <h4 className="mt-4">Common Customization Points</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Variable Type</th>
                <th>Examples</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Colors</td>
                <td><code>$primary</code>, <code>$secondary</code></td>
                <td>Brand colors and theme</td>
              </tr>
              <tr>
                <td>Typography</td>
                <td><code>$font-family-base</code>, <code>$font-size-base</code></td>
                <td>Font families and sizes</td>
              </tr>
              <tr>
                <td>Spacing</td>
                <td><code>$spacer</code>, <code>$spacers</code></td>
                <td>Margin and padding scale</td>
              </tr>
              <tr>
                <td>Components</td>
                <td><code>$border-radius</code>, <code>$btn-padding-y</code></td>
                <td>Component-specific styles</td>
              </tr>
              <tr>
                <td>Breakpoints</td>
                <td><code>$grid-breakpoints</code></td>
                <td>Responsive breakpoints</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <h4 className="mt-4">Build Process</h4>
        <div className="component-preview">
          <p>To use Sass customization, you'll need a build process. Here's a basic setup:</p>
          <ol>
            <li>Install Sass compiler</li>
            <li>Create a main Sass file with your customizations</li>
            <li>Import Bootstrap after your variable overrides</li>
            <li>Compile to CSS</li>
          </ol>
          
          <div className="alert alert-info">
            <strong>Tip:</strong> Always override Bootstrap variables before importing Bootstrap files.
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomThemes;