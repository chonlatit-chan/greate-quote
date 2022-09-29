import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>คำคมเพื่อชีวิต</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              คำคมทั้งหมด
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              เพิ่มคำคม
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
