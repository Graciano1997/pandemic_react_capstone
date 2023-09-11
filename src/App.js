import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import Countries from './components/Countries';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
