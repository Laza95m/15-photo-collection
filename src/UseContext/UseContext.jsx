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

  useEffect(() => {
    const getDataCollections = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `http://localhost:3000/collections?${
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

    getDataCollections();
  }, [categoryId]);

  useEffect(() => {
    const getDataCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/categories');

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

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
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
