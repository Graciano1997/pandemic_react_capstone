import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContinentCases } from '../redux/continent/continentSlice';
import style from '../assets/style/Continents.module.css';
import styleInfo from '../assets/style/Info.module.css';
import Continent from './Continent';

export default function Continents() {
  const dispatch = useDispatch();

  const { continents, isLoading, hasError } = useSelector((state) => state.continents);

  useEffect(() => {
    dispatch(getContinentCases());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styleInfo.isLoading}>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className={styleInfo.hasError}>
        <h2>UPPPS!...</h2>
        <h4>Network Issues 🐌..🐌..🐌</h4>
      </div>
    );
  }

  if (continents.length > 0) {
    const styleTheme = '#00000038';
    const standard = 'transparent';
    const standardContinents = ['Africa', 'Asia', 'Europe'];
    return (
      <section className={style.continentContainer}>
        {
          continents.map((continent, index) => (
            <Continent
              key={{ index }}
              continent={continent.continent}
              population={continent.population}
              cases={continent.cases}
              active={continent.active}
              todayCases={continent.todayCases}
              recovered={continent.recovered}
              todayRecovered={continent.todayRecovered}
              map={continent.map}
              countries={continent.countries}
              theme={standardContinents.includes(continent.continent) ? styleTheme : standard}
            />
          ))
        }
      </section>
    );
  }

  return (
    <section className={style.continentContainer}>
      <Continent />
    </section>
  );
}
