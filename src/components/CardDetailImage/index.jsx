import { Button } from 'components';

const CardDetailImage = () => {
  return (
    <div className="d-flex flex-column card-detail-image">
      <div className="mb-4">
        <img src="https://placeimg.com/480/580/people" alt="Detail product" />
      </div>
      <div className="d-flex justify-content-between">
        <Button label="Add to cart" blue block mr size="lg" />
        <Button label="Add to cart" blue size="lg" />
      </div>
    </div>
  );
};

export default CardDetailImage;
