import { Title, CardProduct } from 'components';
import { product } from 'configs/product/product';

export const getStaticProps = async () => {
  return {
    props: {
      productList: product,
    },
  };
};

const Catalog = ({ productList }) => {
  return (
    <div>
      <Title label="Belgian - Catalog" />

      <div className="container pt-4 pb-4">
        <div className="card product">
        <h5 className="mt-3 font-weight-bold">Wishlist</h5>
          {productList.map((productList) => (
            <CardProduct key={productList.id} {...productList} />
          ))}
        </div>
        </div>
      </div>
  );
};

export default Catalog;
