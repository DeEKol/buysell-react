import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { Context } from './context/context';

function App() {
  const [elements, setElements] = useState([]); //Массив элементов на вывод

  const [element, setElement] = useState({}); //Костыль - следит за обновлением
  const [objectForm, setObjectForm] = useState({}); //Форма ввода

  return (
    <Context.Provider value={{
      objectForm,
      setObjectForm,
      elements,
      setElements,
      element,
      setElement
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
