import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContinentCases } from '../redux/continent/continentSlice';
import style from '../assets/style/Continents.module.css';
import Continent from './Continent';

export default function Continents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinentCases());
  }, [dispatch]);

  return (
    <section className={style.continentContainer}>
      <Continent />
    </section>
  );
}
