import React from 'react';

const Overview = () => {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Bootstrap Learning Project</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Overview</h2>
        <p>Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.</p>
        
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Get started</h5>
                <p className="card-text">Quickly get started with Bootstrap's compiled CSS and JS.</p>
                <a href="#" className="btn btn-primary">Read guide</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Starter template</h5>
                <p className="card-text">Nothing but the basics: compiled CSS and JavaScript.</p>
                <a href="#" className="btn btn-primary">Browse templates</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;