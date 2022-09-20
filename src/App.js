import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
