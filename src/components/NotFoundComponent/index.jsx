import React from 'react';

import style from './NotFound.module.scss'

function NotFoundComponent() {
  return (
    <div className={style.root}>
      <span>🙁</span>
      <h1>Такой страницы не существует</h1>
    </div>
  );
}

export default NotFoundComponent;
