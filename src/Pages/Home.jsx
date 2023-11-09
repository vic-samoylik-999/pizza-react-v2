import React from 'react';
import { nanoid } from 'nanoid';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import PizzaSkeleton from '../components/PizzaBlock/PizzaSkeleton';
import { SearchContext } from '../App';

function Home() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const url = 'https://6543995f01b5e279de20a355.mockapi.io/items';

  React.useEffect(() => {
    async function getData(url) {
      const responce = await fetch(url);
      const data = await responce.json();
      setItems(data);
      setIsLoading(false);
    }
    getData(url);
  }, [searchValue]);

  const skeletons = [...new Array(8)].map(() => <PizzaSkeleton key={nanoid()} />);
  const pizzas = searchValue
    ? items
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item) => <PizzaBlock key={nanoid()} {...item} />)
    : items.map((item) => <PizzaBlock key={nanoid()} {...item} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
}

export default Home;
