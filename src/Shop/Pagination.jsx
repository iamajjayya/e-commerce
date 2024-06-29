import React from 'react'

const Pagination = ({ productsPerpage , totalProducts  , pageinate , activepage    }) => {

    const pagenumber = [];
    for (let i=1; i<= Math.ceil(totalProducts / productsPerpage); i++) {
        pagenumber.push(i);
    }
  return (
    <ul className='default-pagination lab-ul'>
      <li>
          <a href='#'></a>
      </li>
        {
            pagenumber.map((num) => (
                <li key={num} className={` page-item ${num === activepage ? "bg-warning" : ""}`} >
                     <button onClick={ () => pageinate(num)} className='bg-transparent'>{num}</button>
                </li>
            ))
        }
    </ul>
  )
}

export default Pagination