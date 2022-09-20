import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { Context } from './context/context';

function App() {
  const [elements, setElements] = useState([]);
  const [objectForm, setObjectForm] = useState({});

  return (
    <Context.Provider value={{
      objectForm,
      setObjectForm,
      elements,
      setElements
    }}>
      <div className="App">
        <header>
          <BrowserRouter>
            <Navbar/>
            <AppRouter/>
          </BrowserRouter>
        </header>
      </div>
  </Context.Provider>
  )
}

export default App;
