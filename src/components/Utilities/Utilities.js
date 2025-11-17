import React from 'react';

const Utilities = () => {
  const spacingCode = `<!-- Margin and Padding -->
<div class="m-1 p-1">Small margin and padding</div>
<div class="m-2 p-2">Medium margin and padding</div>
<div class="m-3 p-3">Large margin and padding</div>

<!-- Directional Spacing -->
<div class="mt-3">Margin top</div>
<div class="mb-3">Margin bottom</div>
<div class="ms-3">Margin start (left)</div>
<div class="me-3">Margin end (right)</div>

<div class="pt-3">Padding top</div>
<div class="pb-3">Padding bottom</div>
<div class="ps-3">Padding start (left)</div>
<div class="pe-3">Padding end (right)</div>`;

  const textCode = `<!-- Text Alignment -->
<p class="text-start">Start aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-end">End aligned text</p>

<!-- Text Colors -->
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-danger">Danger text</p>

<!-- Text Styles -->
<p class="fw-bold">Bold text</p>
<p class="fst-italic">Italic text</p>
<p class="text-decoration-underline">Underlined text</p>`;

  const flexCode = `<!-- Flexbox Utilities -->
<div class="d-flex justify-content-between">
  <div>Flex item 1</div>
  <div>Flex item 2</div>
  <div>Flex item 3</div>
</div>

<div class="d-flex align-items-center">
  <div>Aligned center</div>
</div>

<!-- Flex Direction -->
<div class="d-flex flex-row">Horizontal flex</div>
<div class="d-flex flex-column">Vertical flex</div>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Utilities</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Utilities</h2>
        <p>Bootstrap includes a wide range of shorthand utility classes for quickly styling elements without custom CSS.</p>
        
        <h4 className="mt-4">Spacing</h4>
        <div className="component-preview">
          <div className="d-flex">
            <div className="utility-example me-3 p-2">Margin & Padding</div>
            <div className="utility-example mx-3 p-4">More Padding</div>
            <div className="utility-example ms-3 p-1">Less Padding</div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{spacingCode}</pre>
        </div>
        
        <h4 className="mt-4">Text Utilities</h4>
        <div className="component-preview">
          <p className="text-start">Start aligned text.</p>
          <p className="text-center">Center aligned text.</p>
          <p className="text-end">End aligned text.</p>
          <p className="text-primary">Primary text.</p>
          <p className="text-success">Success text.</p>
          <p className="text-danger">Danger text.</p>
          <p className="fw-bold">Bold text.</p>
          <p className="fst-italic">Italic text.</p>
        </div>
        
        <div className="code-block">
          <pre>{textCode}</pre>
        </div>
        
        <h4 className="mt-4">Flexbox Utilities</h4>
        <div className="component-preview">
          <div className="d-flex justify-content-between p-3 bg-light mb-3">
            <div>Flex item 1</div>
            <div>Flex item 2</div>
            <div>Flex item 3</div>
          </div>
          
          <div className="d-flex align-items-center p-3 bg-light">
            <div className="me-3">Item 1</div>
            <div className="me-3">Item 2</div>
            <div>Item 3 - Aligned center</div>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{flexCode}</pre>
        </div>

        <h4 className="mt-4">Common Utility Classes</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Utility</th>
                <th>Classes</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spacing</td>
                <td>m-*, p-*, mt-*, mb-*, etc.</td>
                <td>Margin and padding utilities</td>
              </tr>
              <tr>
                <td>Text</td>
                <td>text-*, fw-*, fs-*</td>
                <td>Text alignment, weight, size</td>
              </tr>
              <tr>
                <td>Background</td>
                <td>bg-*</td>
                <td>Background colors</td>
              </tr>
              <tr>
                <td>Border</td>
                <td>border, border-*</td>
                <td>Border utilities</td>
              </tr>
              <tr>
                <td>Display</td>
                <td>d-*, d-*-*</td>
                <td>Display properties</td>
              </tr>
              <tr>
                <td>Flex</td>
                <td>d-flex, justify-*, align-*</td>
                <td>Flexbox utilities</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Utilities;