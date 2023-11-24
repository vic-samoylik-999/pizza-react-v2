import React from 'react';
import { nanoid } from 'nanoid';

function Categories({ currentCategory, setCurrentCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => {
          return (
            <li
              key={nanoid()}
              className={currentCategory === index ? 'active' : ''}
              onClick={() => setCurrentCategory(index)}
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
