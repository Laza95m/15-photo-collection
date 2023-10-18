import React from 'react';
import { UseMyContext } from '../../UseContext/UseContext';

const Pagination = () => {
  const { page, setPage } = UseMyContext();

  return (
    <ul className="pagination">
      {[...Array(5)].map((el, i) => (
        <li
          key={i}
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
