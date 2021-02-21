import { CardDetailImage, CardDetailContent, Title } from 'components';

const CatalogDetail = () => {
  return (
    <>
      <Title label="Product Details" />
      <div className="container card my-4 pt-3">
        <div className="d-flex catalog-detail">
          <div className="catalog-detail__left">
            <CardDetailImage />
          </div>
          <div className="ml-5 catalog-detail__right">
            <CardDetailContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogDetail;
