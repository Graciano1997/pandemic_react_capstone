import Continent from './Continent';
import style from '../assets/style/Continents.module.css';

export default function Continents() {
  return (
    <section className={style.continentContainer}>
      <Continent />
    </section>
  );
}
