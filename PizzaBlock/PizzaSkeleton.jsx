import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={290}
    height={490}
    viewBox="0 0 290 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="144" cy="134" r="125" />
    <rect x="0" y="337" rx="15" ry="15" width="280" height="55" />
    <rect x="0" y="269" rx="15" ry="15" width="280" height="55" />
    <rect x="0" y="408" rx="13" ry="13" width="90" height="27" />
    <rect x="130" y="400" rx="27" ry="27" width="150" height="45" />
  </ContentLoader>
);

export default MyLoader;
