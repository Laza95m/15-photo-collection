import './index.scss';
import Collection from './components/Collection/Collection';
import { UseMyContext } from './UseContext/UseContext';

const App = () => {
  const {
    collections,
    searchValue,
    setSearchValue,
    categories,
    categoryId,
    setCategoryId,
    isLoading,
  } = UseMyContext();

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
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
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
};

export default App;
