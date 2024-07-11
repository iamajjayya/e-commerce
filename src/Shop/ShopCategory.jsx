import { Button } from 'react-bootstrap';

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All categories</h5>
      </div>
      <div>
      
        {menuItems.map((val, id) => (
          <Button
            key={id}
            className={`m-2 ${selectedCategory === val ? 'selected-category' : ''}`}
            onClick={() => filterItem(val)}
          >
            {val}
          </Button>
        ))}
      </div>
    </>
  );
};

export default ShopCategory;
