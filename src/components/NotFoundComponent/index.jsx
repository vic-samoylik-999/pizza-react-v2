import React from 'react';

import style from './NotFound.module.scss';

function NotFoundComponent() {

  return (
    <div className={style.root}>
      <span>🙁</span>
      <h1>Очень жаль, но такой страницы не существует</h1>
    </div>
  );
}

export default NotFoundComponent;
