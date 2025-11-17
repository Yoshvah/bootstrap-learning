import React from 'react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: 'bi-house' },
    { id: 'color', label: 'Color', icon: 'bi-droplet' },
    { id: 'components', label: 'Components', icon: 'bi-puzzle' },
    { id: 'forms', label: 'Forms', icon: 'bi-input-cursor-text' },
    { id: 'navigation', label: 'Navigation', icon: 'bi-compass' },
    { id: 'modals', label: 'Modals', icon: 'bi-window' },
    { id: 'carousel', label: 'Carousel', icon: 'bi-images' },
    { id: 'grid', label: 'Grid', icon: 'bi-grid-3x3' },
    { id: 'utilities', label: 'Utilities', icon: 'bi-tools' },
    { id: 'themes', label: 'Custom Themes', icon: 'bi-palette' }
  ];

  return (
    <div className="sidebar p-3">
      <h4 className="mb-3">Bootstrap Learning</h4>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map(item => (
          <li key={item.id} className="nav-item">
            <button
              className={`nav-link w-100 text-start ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <i className={`bi ${item.icon}`}></i> {item.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;