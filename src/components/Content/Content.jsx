import React from 'react';
import { UseMyContext } from '../../UseContext/UseContext';
import Collection from '../Collection/Collection';

const Content = () => {
  const { collections, searchValue, isLoading } = UseMyContext();

  return (
    <div className="content">
      {isLoading ? (
        <h2>Идёт загрузка...</h2>
      ) : (
        collections
          .filter((el) =>
            el.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el, i) => (
            <Collection key={i} name={el.name} images={el.photos} />
          ))
      )}
    </div>
  );
};

export default Content;
