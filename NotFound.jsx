import React from 'react';

import NotFoundComponent from '../components/NotFoundComponent';

function NotFound() {
  return (
    <div className="not-found">
      <NotFoundComponent />
      <p>Очень жаль, но на нашем сайте такой пиццы нет...</p>
    </div>
  );
}

export default NotFound;
