import React, { useState } from "react";
import Header from "../Components/Header";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import Populatpost from "./Populatpost";
import Tags from "./Tags";

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

// Filter Producurct 


const [selectedCategory, setSelectCategory] = useState("All");
const menuItems = [...new Set(Data.map((val) => val.category ))];


const filterItem = (curcat) => {
   const newItem =  Data.filter((newval) => {
     return newval.category === curcat;
   })

   setSelectCategory(curcat);
   setProducts(newItem);
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
                  <ProductCards gridlist={gridlist} products={currentproduct} />
                </div>
                <Pagination  
                productsPerpage =  {productsPerpage}
                totalProducts ={products.length}
                pageinate = {pageinate}
                activepage = {currentpage}                
                
                 />
              </article>
            </div>
            <div className="col-lg-4 col-12">
                 <aside>
                        <Search products={products}  gridlist={gridlist} />
                        <ShopCategory filterItem = {filterItem} setItem={setProducts} menuItems={menuItems} setProducts={setProducts} selectedCategory = {selectedCategory}/>
                        <Populatpost />
                        <Tags />
                 </aside>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
