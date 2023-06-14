import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MainContent from './components/MainContent';
import Terms from './components/Footer/Derechos/Terms/Terms';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='generalContainer'>
        <Routes>
          <Route path='/' element={<MainContent />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
