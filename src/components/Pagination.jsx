import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const numbers = [];

  for (let i = 1; i <= totalPosts / postsPerPage; i++) {
    numbers.push(i);
  }

  return (
    <div>
      <ul className='pagination'>
        {numbers.map((number) => (
          <li className='page-item' key={number}>
            <a onClick={() => paginate(number)} href="#" className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination