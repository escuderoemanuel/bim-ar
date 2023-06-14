import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import MainContent from './components/MainContent';
import TermsEn from './components/Footer/Derechos/Terms/Terms-En';
import TermsEs from './components/Footer/Derechos/Terms/Terms-Es';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className='generalContainer'>
        <Routes>
          <Route path='/' Component={MainContent}></Route>
          <Route path='/terms-en' Component={TermsEn}></Route>
          <Route path='/terms-es' Component={TermsEs}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
