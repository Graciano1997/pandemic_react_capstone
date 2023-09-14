import style from '../assets/style/Info.module.css';

const Wrong = () => (
  <div className={style.errorContainer}>
    <h4>UPSS! Page Not Found 😫😭</h4>
    <p>Please Ensure to write a valid path...</p>
  </div>
);

export default Wrong;
