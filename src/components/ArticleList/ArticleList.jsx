// import React from 'react'

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ image }) => (
      <li key={image.id}>
        <img src={image.urls.small} alt={image.description} className={s.img} />
      </li>
    ))}
  </ul>
);

export default ArticleList;
