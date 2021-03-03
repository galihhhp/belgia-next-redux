import { Button } from 'components';

const Category = () => {
  return (
    <div>
      <div className="container pt-4">
        <div className="card">
          <div className="card-body ml-4">
            <div className="row cart-body--text">
              <h4>Catalog Product</h4>
            </div>

            <div className="row pt-4 pb-2">
              <Button label="Food & Drink" rounded mr white />
              <Button label="Fashion" rounded mr white />
              <Button label="Electronic" rounded mr white />
              <Button label="Others" rounded mr white />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
