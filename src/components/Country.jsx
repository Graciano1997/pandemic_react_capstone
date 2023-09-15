import PropTypes from 'prop-types';
import style from '../assets/style/Country.module.css';

const Country = ({
  country, active, todayCases, todayRecovered, flag, styleTheme,
}) => (
  <div className={style.countryContainer} style={{ background: styleTheme.background }}>
    <div className={style.countrySituation}>
      <img src={flag} alt="Loading..." />
      <p style={{ justifySelf: 'start' }}>{country}</p>
      <p>{active}</p>
      <p>{todayCases}</p>
      <p>{todayRecovered}</p>
    </div>
  </div>
);

Country.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  styleTheme: PropTypes.shape({ background: PropTypes.string }).isRequired,
  todayCases: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
};

export default Country;
