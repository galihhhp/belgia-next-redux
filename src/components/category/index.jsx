import { Button } from 'components';

const Category = ({filter, categories}) => {
  return (
    <div>
      <div className="container pt-4">
        <div className="card">
          <div className="card-body ml-4">
            <div className="row cart-body--text">
              <h4>Catalog Product</h4>
            </div>

            <div className="row pt-4 pb-2">
              { categories.map((cat, i)=>{
              return <Button label="Food & Drink" 
              rounded mr white 
              onClick={() => filter(cat)}
              key={i}
              label={cat}
              />
            })}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
