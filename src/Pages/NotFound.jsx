import React from 'react';
import { Outlet } from 'react-router-dom';

function NotFound() {
  const currentPath = window.location.href;
  const lastIndex = currentPath.split('').lastIndexOf('/');
  const slicedPath = currentPath.slice(lastIndex + 1);
  return (
    <div className="not-found">
      <Outlet />
      <p>Очень жаль, но на нашем сайте нет "{slicedPath}"...</p>
    </div>
  );
}

export default NotFound;
