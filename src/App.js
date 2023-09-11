import { Route, Router } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import Countries from './components/Countries';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path='/' element={<Continents />}></Route>
        <Route path='/countries' element={<Countries />}></Route>
      </Router>
    </>
  );
}

export default App;
