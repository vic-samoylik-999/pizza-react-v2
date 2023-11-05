import React from 'react';
import { nanoid } from 'nanoid';

function Categories() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const changeActiveIndex = (chosenIndex) => {
    setCurrentIndex(chosenIndex);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={nanoid()}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => changeActiveIndex(index)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
