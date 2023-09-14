import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMicrophone, faGear } from '@fortawesome/free-solid-svg-icons';
import style from '../assets/style/Header.module.css';

function Header() {
  const thisYear = new Date();
  const navegate = useNavigate();
  return (
    <header className={style.headerContainer}>
      <div className={style.btnBackContainer}>
        <button type="button" onClick={() => { navegate('/'); }}>
          <FontAwesomeIcon icon={faAngleLeft} className={style.btnBack} />
        </button>
        <h3>{thisYear.getFullYear()}</h3>
      </div>
      <div className={style.logoContainer}>
        <h5>Covid-19 Pandemic Situation</h5>
      </div>
      <div className={style.tools}>
        <FontAwesomeIcon icon={faMicrophone} className={style.toolItems} />
        <FontAwesomeIcon icon={faGear} className={style.toolItems} />
      </div>
    </header>
  );
}

export default Header;
