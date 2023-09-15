import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Continents from './components/Continents';
import Countries from './components/Countries';
import Search from './components/Search';
import Wrong from './components/Wrong';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Search />
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="countries" element={<Countries />} />
        <Route path="*" element={<Wrong />} />
      </Routes>
    </>
  );
}

export default App;
