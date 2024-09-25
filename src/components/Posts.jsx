import React from 'react'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>
  }
  return (
    <ul className='list-group mb-4'>
      {posts.map((dataItem) => (
        <li className='list-group-item' key={dataItem.id}>
          {dataItem.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;