import React from 'react';
import { nanoid } from 'nanoid';

import ascIcon from '../assets/img/sort-asc.png';
import descIcon from '../assets/img/sort-desc.png';

function Sort({
  currentDropdownToggle,
  currentSortChoice,
  isAscendingOrder,
  setDrodownToggle,
  setCurrentSortChoice,
  setIsAscendingOrder,
}) {
  const toggleStates = ['умолчанию', 'рейтингу', 'цене', 'алфавиту'];

  const onClickToggle = (index) => {
    setCurrentSortChoice(index);
    setDrodownToggle(false);
  };

  const changeSortOrder = () => {
    setIsAscendingOrder((prevSortOrder) => !prevSortOrder);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          className={currentDropdownToggle ? 'sort__arrow active' : 'sort__arrow'}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <div onClick={() => setDrodownToggle(!currentDropdownToggle)}>
          <b>Сортировка по:</b>
          <span>{toggleStates[currentSortChoice]}</span>
        </div>

        <div className="sort__sort-order" onClick={changeSortOrder}>
          <img src={isAscendingOrder ? ascIcon : descIcon} alt="Ascending Icon" />
        </div>
      </div>

      {currentDropdownToggle && (
        <div className="sort__dropdown">
          <ul>
            {toggleStates.map((item, index) => {
              return (
                <li
                  key={nanoid()}
                  className={currentSortChoice === index ? 'active' : ''}
                  onClick={() => onClickToggle(index)}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
