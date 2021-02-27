import { product } from 'configs/product/product';

export const getStaticProps = async () => {
  return {
    props: {
      productList: product,
    },
  };
};

const CardBasket = ({ img, id, name, price }) => {
  return (
    <div className="container pt-4 pb-3">
      <div className="d-flex flex-row card shadow-sm" style={{ width: '15rem' }}>
        <img src={img} alt={name} className="card-img-top btn" />
        <div className="mt-5 ml-5 justify-align-items-center caption">
          <h5 className="card-title">{name}</h5>
          <h5 className="font-weight-bold card-title">{price}</h5>
        </div>
        <div className="text-center pt-4"></div>
      </div>
    </div>
  );
};

export default CardBasket;
