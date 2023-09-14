import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
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
        {/* <img src={logo} alt="Covid Logo" /> */}
        <h6>Covid-19 Pandemic Situation</h6>
      </div>
      <div>
        <h1>Header</h1>
      </div>
    </header>
  );
}

export default Header;
