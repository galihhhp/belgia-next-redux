import { Title, Category, CardProduct } from 'components';
import { connect } from 'react-redux';

export const mapStateToProps =  (state) => {
  return {
    products: state.shop.products,
  };
};

const Catalog = ({ products }) => {
  return (
    <div>
      <Title label="Belgian - Catalog" />
      <Category />

      <div className="container pt-4 pb-4">
        <div className="card product">
          {products.map((prod) => (
            <CardProduct key={prod.id} productData = {prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Catalog);
