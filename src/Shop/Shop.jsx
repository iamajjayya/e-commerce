import React, { useState } from "react";
import Header from "../Components/Header";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";

const showResult = "Showing 01- 12 of 139 Results";
const Shop = () => {
  const [gridlist, setGridlist] = useState(true);
  const [products, setProducts] = useState(Data);

  // Pagination

  const [currentpage, setCurrentpage] = useState(1);
  const productsPerpage = 12;
 

   const indexofLastproduct = currentpage  *  productsPerpage;
   const indexoffirstProductpage = indexofLastproduct - productsPerpage;
   const currentproduct = products.slice(indexoffirstProductpage,indexofLastproduct);

  //  function to change the current  page 

  const pageinate  = (pagenumber) => {
    setCurrentpage(pagenumber);
  }
  return (
    <>
      <Header title="Our Shop Page" curPage="Shop" />

      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      gridlist ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridlist(!gridlist)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridlist(!gridlist)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards gridlist={gridlist} products={products} />
                </div>
                <Pagination  
                productsPerpage =  {productsPerpage}
                totalProducts ={products.length}
                pageinate = {pageinate}
                activepage = {currentpage}                
                
                 />
              </article>
            </div>
            <div className="col-lg-4 col-12">right side</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
