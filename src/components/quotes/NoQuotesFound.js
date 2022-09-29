import { Link } from 'react-router-dom';

import classes from './NoQuotesFound.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>ยังไม่มีคำคมเลอ</p>
      <Link className='btn' to='/new-quote'>
        เพิ่มคำคมดิ
      </Link>
    </div>
  );
};

export default NoQuotesFound;
