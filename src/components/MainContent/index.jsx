/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios'
import './MainContent.css'
import Preloader from '../Preloader';
import { useCart } from '../UseContext/useCart';

const MainContent = ({ sorting, rating }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterItem, setfilterItem] = useState([]);
  const { addToCart , totalProduct } = useCart([])

  const onAddProduct = (item) => {
    addToCart(item);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://62ceb481826a88972d01421d.mockapi.io/items');
        setData(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error('Произошла ошибка при выполнении запроса:', error);
      }
    };

    fetchData();

    if (!loading) {
      const filteredData = sorting === 0 ? data : data.filter(item => item.category === sorting);
      const sortedData = [...filteredData];

      if (rating === 'популярности') {
        sortedData.sort((a, b) => a.rating - b.rating);
      } else if (rating === 'цена') {
        sortedData.sort((a, b) => a.price - b.price);
      } else if (rating === 'алфавиту') {
        sortedData.sort((a, b) => a.title.localeCompare(b.title));
      }

      setfilterItem(sortedData);
    }
  }, [data, sorting, rating, loading]);





  return (
    <>
      {
        loading ? <Preloader /> : filterItem.map((item, index) => (
          <div className="pizza-block" key={index}>
            <div className="pizza-block__item">
              <img className="pizza-block__image" src={item.imageUrl} alt="" />
              <h4 className="pizza-block__title">{item.title}</h4>
              <div className="pizza-block__selector">
                <ul>
                  <li className="active">
                    {"Традиционное"}
                  </li>
                  <li>
                    {"Тонкое"}
                  </li>
                </ul>
                <ul>
                  <li className="active">{item.sizes[0]}</li>
                  <li>{item.sizes[1]}</li>
                  <li>{item.sizes[2]}</li>
                </ul>
              </div>
              <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {item.price} ₽</div>
                <div className="button button--outline button--add" onClick={()=> onAddProduct(item)}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white" />
                  </svg>
                  <span>Добавить</span>
                  <i>{totalProduct}</i>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )

}
export default MainContent;