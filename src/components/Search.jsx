import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getCountriesCases, resetCountries } from '../redux/country/countrySlice';
import style from '../assets/style/Header.module.css';

function Search() {
  const [country, setCountry] = useState('');
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const handlerClick = () => {
    if (country !== '') {
      dispatch(resetCountries());
      navegate('/countries');
      dispatch(getCountriesCases(country));
    }
    document.querySelector('#ctry').value = '';
  };
  return (
    <section className={style.searchContainer}>
      <div className={style.item}>
        <form action="">
          <div className={style.searchContainerItem}>
            <input type="text" name="country" placeholder="Type a country name" id="ctry" onKeyUp={(e) => setCountry(e.target.value)} />
            <button type="button" onClick={handlerClick} className={style.searchBtn}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}

export default Search;
