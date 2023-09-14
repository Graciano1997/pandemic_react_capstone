import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getCountriesCases } from '../redux/country/countrySlice';
import style from '../assets/style/Continents.module.css';

function Continent({
  map, continent, countries, active, todayCases, todayRecovered, theme,
}) {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handlerClick = async () => {
    const countriesList = countries.toString();
    const url = `https://disease.sh/v3/covid-19/countries/${countriesList}`;
    await dispatch(getCountriesCases(url));
    navegate('/countries');
  };

  return (
    <div className={style.continentItem} style={{ background: theme }}>
      <div className={style.continentImage}>
        <img src={map} alt="continent" className={style.continentImage} />
      </div>
      <div className={style.continentSituation}>
        <button type="button" onClick={handlerClick}>
          <FontAwesomeIcon icon={faCircleArrowRight} className={style.continentButton} />
        </button>
        <div className={style.continentStatus}>
          <h3>
            {continent}
          </h3>
          <h3>
            {`active: ${active}`}
          </h3>
          <h3>
            {`Today: ${todayCases}`}
          </h3>
          <h3>
            {`Today Recovered: ${todayRecovered}`}
          </h3>
        </div>
      </div>
    </div>
  );
}

Continent.propTypes = {
  continent: PropTypes.string.isRequired,
  map: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  todayCases: PropTypes.string.isRequired,
  todayRecovered: PropTypes.string.isRequired,
  countries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Continent;
