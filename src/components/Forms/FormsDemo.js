import React, { useState } from 'react';

const FormsDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    select: '',
    textarea: '',
    checkbox: false,
    radio: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const basicFormCode = `<!-- Basic Form -->
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
  </div>
  
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
  </div>
  
  <div class="mb-3">
    <label for="select" class="form-label">Select menu</label>
    <select class="form-select" id="select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
    </select>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;

  const validationCode = `<!-- Form Validation -->
<form class="needs-validation" novalidate>
  <div class="mb-3">
    <label for="validationEmail" class="form-label">Email</label>
    <input type="email" class="form-control" id="validationEmail" required>
    <div class="invalid-feedback">Please provide a valid email.</div>
  </div>
  
  <div class="mb-3">
    <label for="validationPassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationPassword" required>
    <div class="invalid-feedback">Please provide a password.</div>
  </div>
  
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="validationCheck" required>
    <label class="form-check-label" for="validationCheck">Agree to terms</label>
    <div class="invalid-feedback">You must agree before submitting.</div>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit form</button>
</form>`;

  const inputGroupsCode = `<!-- Input Groups -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username">
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username">
  <span class="input-group-text">@example.com</span>
</div>

<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control">
  <span class="input-group-text">.00</span>
</div>`;

  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Forms</h1>
      </div>

      <section className="component-section">
        <h2 className="component-title">Form Components</h2>
        <p>Bootstrap's form controls expand on our Rebooted form styles with classes.</p>
        
        <h4 className="mt-4">Basic Form</h4>
        <div className="component-preview">
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="select" className="form-label">Select menu</label>
              <select 
                className="form-select" 
                id="select"
                name="select"
                value={formData.select}
                onChange={handleChange}
              >
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            
            <div className="mb-3">
              <label htmlFor="textarea" className="form-label">Example textarea</label>
              <textarea 
                className="form-control" 
                id="textarea" 
                rows="3"
                name="textarea"
                value={formData.textarea}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className="mb-3 form-check">
              <input 
                type="checkbox" 
                className="form-check-input" 
                id="checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="checkbox">Check me out</label>
            </div>
            
            <div className="mb-3">
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="radio" 
                  id="radio1"
                  value="option1"
                  checked={formData.radio === 'option1'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio1">Default radio</label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  name="radio" 
                  id="radio2"
                  value="option2"
                  checked={formData.radio === 'option2'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="radio2">Second radio</label>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        
        <div className="code-block">
          <pre>{basicFormCode}</pre>
        </div>
        
        <h4 className="mt-4">Form Validation</h4>
        <div className="component-preview">
          <form className="needs-validation" noValidate>
            <div className="mb-3">
              <label htmlFor="validationEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="validationEmail" required />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="validationPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="validationPassword" required />
              <div className="invalid-feedback">Please provide a password.</div>
            </div>
            
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="validationCheck" required />
              <label className="form-check-label" htmlFor="validationCheck">Agree to terms and conditions</label>
              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit form</button>
          </form>
        </div>
        
        <div className="code-block">
          <pre>{validationCode}</pre>
        </div>
        
        <h4 className="mt-4">Input Groups</h4>
        <div className="component-preview">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" />
            <span className="input-group-text">@example.com</span>
          </div>
          
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text" className="form-control" />
            <span className="input-group-text">.00</span>
          </div>
          
          <div className="input-group mb-3">
            <span className="input-group-text">With textarea</span>
            <textarea className="form-control" rows="3"></textarea>
          </div>
        </div>
        
        <div className="code-block">
          <pre>{inputGroupsCode}</pre>
        </div>
      </section>
    </div>
  );
};

export default FormsDemo;