import React from 'react';

const Pagination = ({ productsPerpage, totalProducts, pageinate, activepage }) => {
  const pagenumber = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerpage); i++) {
    pagenumber.push(i);
  }

  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (activepage > 1) {
              pageinate(activepage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pagenumber.map((num) => (
        <li key={num} className={`page-item ${num === activepage ? 'bg-warning' : ''}`}>
          <button onClick={() => pageinate(num)} className="bg-transparent">
            {num}
          </button>
        </li>
      ))}
      <li>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (activepage < pagenumber.length) {
              pageinate(activepage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
