import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Layout/Sidebar';
import Overview from './components/ComponentsDemo/Overview';
import ColorSystem from './components/ComponentsDemo/ColorSystem';
import ComponentsDemo from './components/ComponentsDemo/ComponentsDemo';
import FormsDemo from './components/Forms/FormsDemo';
import NavigationDemo from './components/Navigation/NavigationDemo';
import ModalsDemo from './components/Modals/ModalsDemo';
import CarouselDemo from './components/Carousel/CarouselDemo';
import GridSystem from './components/GridSystem/GridSystem';
import Utilities from './components/Utilities/Utilities';
import CustomThemes from './components/Themes/CustomThemes';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'color':
        return <ColorSystem />;
      case 'components':
        return <ComponentsDemo />;
      case 'forms':
        return <FormsDemo />;
      case 'navigation':
        return <NavigationDemo />;
      case 'modals':
        return <ModalsDemo />;
      case 'carousel':
        return <CarouselDemo />;
      case 'grid':
        return <GridSystem />;
      case 'utilities':
        return <Utilities />;
      case 'themes':
        return <CustomThemes />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2 sidebar-container">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
          <div className="col-md-9 col-lg-10 main-content">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;