import './index.scss';
import Top from './components/Top/Top';
import Content from './components/Content/Content';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <Top />
      <Content />
      <Pagination />
    </div>
  );
};

export default App;
