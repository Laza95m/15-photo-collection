import React from 'react';
import { UseMyContext } from '../../UseContext/UseContext';

const Top = () => {
  const { setSearchValue, categories, categoryId, setCategoryId } =
    UseMyContext();

  return (
    <div className="top">
      <ul className="tags">
        {categories.map((el, i) => (
          <li
            onClick={() => setCategoryId(i)}
            className={categoryId === i ? 'active' : ''}
            key={i}
          >
            {el.name}
          </li>
        ))}
      </ul>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        className="search-input"
        placeholder="Поиск по названию"
      />
    </div>
  );
};

export default Top;
