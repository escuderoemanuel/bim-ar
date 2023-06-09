import { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='generalContainer'>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
