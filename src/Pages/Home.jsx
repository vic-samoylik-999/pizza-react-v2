import React from 'react';
import { nanoid } from 'nanoid';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentCategory, setCurrentCategory] = React.useState(0);
  const [currentDropdownToggle, setDrodownToggle] = React.useState(false);
  const [currentSortChoice, setCurrentSortChoice] = React.useState(0);
  const [isAscendingOrder, setIsAscendingOrder] = React.useState(true);

  const toggleStates = ['умолчанию', 'rating', 'price', 'title'];

  let url = 'https://6543995f01b5e279de20a355.mockapi.io/items';

  if (currentCategory > 0) url += `?search=category&category=${currentCategory}`;
  if (currentSortChoice > 0) {
    if (currentCategory > 0) {
      url += `&sortBy=${toggleStates[currentSortChoice]}`;
      url += `${isAscendingOrder ? '&order=asc' : '&order=desc'}`;
    } else {
      url += `?sortBy=${toggleStates[currentSortChoice]}`;
      url += `${isAscendingOrder ? '&order=asc' : '&order=desc'}`;
    }
  }

  React.useEffect(() => {
    async function getData(url) {
      const responce = await fetch(url);
      const data = await responce.json();
      setItems(data);
      setIsLoading(false);
      console.log(url);
    }
    getData(url);
  }, [currentCategory, currentSortChoice, isAscendingOrder]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <Sort
          currentDropdownToggle={currentDropdownToggle}
          currentSortChoice={currentSortChoice}
          isAscendingOrder={isAscendingOrder}
          toggleStates={toggleStates}
          setDrodownToggle={setDrodownToggle}
          setCurrentSortChoice={setCurrentSortChoice}
          setIsAscendingOrder={setIsAscendingOrder}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map(() => <PizzaSkeleton key={nanoid()} />)
          : items.map((item) => <PizzaBlock key={nanoid()} {...item} />)}
      </div>
    </div>
  );
}

export default Home;
