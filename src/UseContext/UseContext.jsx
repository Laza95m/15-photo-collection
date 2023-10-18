import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export const UseMyContext = () => {
  return useContext(MyContext);
};

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState('');
  const [collections, setCollections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const getDataCollections = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:3000/collections?_page=${page}&_limit=3&${
          categoryId ? `category=${categoryId}` : ''
        }`
      );

      setCollections(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDataCategories = async () => {
    try {
      const response = await axios.get('http://localhost:3000/categories');

      setCategories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataCollections();
  }, [categoryId, page]);

  useEffect(() => {
    getDataCategories();
  }, []);

  return (
    <MyContext.Provider
      value={{
        collections,
        searchValue,
        setSearchValue,
        categories,
        categoryId,
        setCategoryId,
        isLoading,
        page,
        setPage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
