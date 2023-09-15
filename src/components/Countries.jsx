import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
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
        <h4>UPSS! Country Not Found 😫😭</h4>
        <p>Please Ensure to write a correct country&apos;s name</p>
        <p>Or Check your Connection🐌..🐌..🐌</p>
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
          <div><h4>Today Recovered</h4></div>
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
    <div className={styleInfo.info}>
      <div className={styleInfo.infoDetails}>
        <h3>See a Country Today Situation</h3>
        <p>Enter a valid country name in the text field.</p>
        <p>Eg: Japan</p>
        <p>Eg: japan,Angola,India,Canada,...</p>
        <p>
          <FontAwesomeIcon icon={faCircleInfo} className={style.info} />
          It is not Case Sensitive.
        </p>
      </div>

    </div>
  );
};
export default Countries;
