import React from 'react';

// Components
import TopBar from './components/topbar/TopBar';
import SideBar from './components/sidebar/SideBar';

// Pages
import Home from './pages/home/Home';

const App = () => {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
};

export default App;
