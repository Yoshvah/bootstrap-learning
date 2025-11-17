import React, { useState } from 'react';

const ModalsDemo = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [showStatic, setShowStatic] = useState(false);

  const basicModalCode = `<!-- Basic Modal -->
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;

  const staticModalCode = `<!-- Static Backdrop Modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p>I will not close if you click outside me. Don't even try to press escape key.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>`;

  const scrollModalCode = `<!-- Scrolling Long Content -->
<div class="modal-dialog modal-dialog-scrollable">
  <!-- Modal content -->
</div>

<!-- Vertically Centered -->
<div class="modal-dialog modal-dialog-centered">
  <!-- Modal content -->
</div>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Modals</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Modal Components</h2>
        <p>Add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
        
        <h4 className="mt-4">Basic Modal</h4>
        <div className="component-preview">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => setShowBasic(true)}
          >
            Launch demo modal
          </button>
        </div>
        
        <div className="code-block">
          <pre>{basicModalCode}</pre>
        </div>
        
        <h4 className="mt-4">Static Backdrop</h4>
        <div className="component-preview">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => setShowStatic(true)}
          >
            Launch static backdrop modal
          </button>
        </div>
        
        <div className="code-block">
          <pre>{staticModalCode}</pre>
        </div>
        
        <h4 className="mt-4">Scrolling Long Content</h4>
        <div className="component-preview">
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={() => setShowScroll(true)}
          >
            Launch scrolling modal
          </button>
        </div>
        
        <div className="code-block">
          <pre>{scrollModalCode}</pre>
        </div>

        <h4 className="mt-4">Modal Sizes</h4>
        <div className="component-preview">
          <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalSmall">
            Small modal
          </button>
          <button type="button" className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#modalDefault">
            Default modal
          </button>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalLarge">
            Large modal
          </button>
        </div>
      </section>

      {/* Basic Modal */}
      {showBasic && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Basic Modal</h5>
                <button type="button" className="btn-close" onClick={() => setShowBasic(false)}></button>
              </div>
              <div className="modal-body">
                <p>This is a basic modal example. You can close it by clicking the X button or the Close button.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowBasic(false)}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Static Backdrop Modal */}
      {showStatic && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Static Backdrop Modal</h5>
                <button type="button" className="btn-close" onClick={() => setShowStatic(false)}></button>
              </div>
              <div className="modal-body">
                <p>I will not close if you click outside me. You have to use the close button.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowStatic(false)}>Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scrolling Modal */}
      {showScroll && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Scrolling Modal</h5>
                <button type="button" className="btn-close" onClick={() => setShowScroll(false)}></button>
              </div>
              <div className="modal-body">
                <p>This is some placeholder content to show the scrolling behavior for modals.</p>
                {[...Array(20)].map((_, i) => (
                  <p key={i}>This is paragraph {i + 1} to demonstrate scrolling within a modal.</p>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowScroll(false)}>Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop when modal is open */}
      {(showBasic || showScroll || showStatic) && <div className="modal-backdrop show"></div>}
    </div>
  );
};

export default ModalsDemo;