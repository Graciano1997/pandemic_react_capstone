import { useSelector } from 'react-redux';
import style from '../assets/style/Country.module.css';
import Country from './Country';

const Countries = () => {
  const { countries } = useSelector((state) => state.countries);
  const styleTheme = { background: '#367aca' };

  return (
    <div className={style.countryContainer}>
      <div className={style.countrySituationHeader}>
        <div>{' '}</div>
        <div>{' '}</div>
        <div><h4>Active</h4></div>
        <div><h4>Today</h4></div>
        <div><h4>Today Recoverd</h4></div>
      </div>
      {
        countries.map((country, index) => (
          <Country
            key={{ index }}
            country={country.country}
            flag={country.flag}
            active={country.active}
            todayCases={country.todayCases}
            todayRecovered={country.todayRecovered}
            styleTheme={index % 2 === 1 ? styleTheme : ''}
          />
        ))
      }
    </div>
  );
};
export default Countries;
