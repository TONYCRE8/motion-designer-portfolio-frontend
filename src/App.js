import React from 'react'

import Navigation from './components/navigation';

import Routes from './routes'
import './main.css';

function App() {
    return (
        <div>
            <Navigation />
            <Routes />
        </div>
      );
}

export default App