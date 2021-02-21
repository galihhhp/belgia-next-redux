import {
  CardDetailImage,
  ProductSpecification,
  ProductDescription,
  Title,
} from 'components';

const CatalogDetail = () => {
  return (
    <>
      <Title label="Product Details" />
      <div className="container d-flex justify-content-center align-items-center catalog-detail">
        <div className="catalog-detail__left">
          <CardDetailImage />
        </div>
        <div className="ml-5 catalog-detail__right">
          <h1>Hammerstout</h1>
          <h5>Hammerstout</h5>
          <ProductSpecification />
          <ProductDescription />
        </div>
      </div>
    </>
  );
};

export default CatalogDetail;
