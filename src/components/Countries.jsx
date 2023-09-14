import { useSelector } from 'react-redux';
import style from '../assets/style/Country.module.css';
import styleInfo from '../assets/style/Info.module.css';
import Country from './Country';

const Countries = () => {
  const { countries, isLoading, hasError } = useSelector((state) => state.countries);
  const styleTheme = { background: '#367aca' };

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

  if (countries.length > 0) {
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
  }
  return (
    <div className={styleInfo.errorContainer}>
      <h4>UPSS! Country Not Found 😫😭</h4>
      <p>Please Ensure to write a correct country&apos;s name</p>
    </div>
  );
};
export default Countries;
