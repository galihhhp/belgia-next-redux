import { React} from "react";
import { CardDetailImage, CardDetailContent, Title} from 'components';
import { product } from 'configs/product/product';
import { useDispatch } from 'react-redux';
import { addItem } from '../../state/actions';
import { AwesomeButtonProgress } from 'react-awesome-button';

export const getStaticProps = ({ params }) => {
  const productList = product.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      product: productList[0],
    },
  };
};
export const getStaticPaths = () => {
  const paths = product.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const CatalogDetail = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="card-detail-page">
      <Title label="Product Details" />
      <div className="container  my-4 pt-3">
        <div className="card">
          <div className="card-body">
            <div className="row ">
              <div className="col ">
                <CardDetailImage key={product.id} {...product} />
                <div className="text-center pt-5">
                  <AwesomeButtonProgress
                    type="primary"
                    size="large"
                    action={(element, next) => {
                      setTimeout(() => {
                        dispatch(addItem(product.id));
                        next();
                      }, 600);
                    }}
                  >
                    Add to Cart
                  </AwesomeButtonProgress>
                </div>
              </div>

              <div className=" col">
                <CardDetailContent key={product.id} {...product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetail;
