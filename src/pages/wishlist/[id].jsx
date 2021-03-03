import { CardDetailImage, CardDetailContent, Title } from 'components';
import { product } from 'configs/product/product';

export const getStaticProps = async ({ params }) => {
  const productList = product.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      product: productList[0],
    },
  };
};
export const getStaticPaths = async () => {
  const paths = product.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const CatalogDetail = ({ product }) => {
  return (
    <div>
      <Title label="Product Details" />
      <div className="container  my-4 pt-3">
        <div className="card">
          <div className="row g-0 mb-3">
            <div className="col-sm-4">
              <CardDetailImage key={product.id} {...product} />
            </div>

            <div className=" col-sm-8 ">
              <div className="card-body">
                <div className="card-text">
                  <CardDetailContent key={product.id} {...product} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDetail;
