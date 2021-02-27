import { Title, Category, CardProduct } from 'components';
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
      <Category />

      <div className="container pt-4 pb-4">
        <div className="card product">
          {productList.map((productList) => (
            <CardProduct key={productList.id} {...productList} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
