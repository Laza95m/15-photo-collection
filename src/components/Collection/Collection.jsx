import React from 'react';

const Collection = ({ name, images }) => {
  return (
    <div className="collection">
      <img
        loading="lazy"
        className="collection__big"
        src={images[0]}
        alt="Item"
      />
      <div className="collection__bottom">
        <img
          loading="lazy"
          className="collection__mini"
          src={images[1]}
          alt="Item"
        />
        <img
          loading="lazy"
          className="collection__mini"
          src={images[2]}
          alt="Item"
        />
        <img
          loading="lazy"
          className="collection__mini"
          src={images[3]}
          alt="Item"
        />
      </div>
      <h4>{name}</h4>
    </div>
  );
};

export default Collection;
