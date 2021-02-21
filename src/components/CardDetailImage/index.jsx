import { Button } from 'components';

const CardDetailImage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center card-detail">
      <div className="mb-4 card-detail--image">
        <img src="https://placeimg.com/640/480/people" alt="Detail product" />
      </div>
      <div className="d-flex justify-content-between card-detail--button">
        <Button label="Add to cart" size="lg" />
        <Button label="Add to cart" size="lg" />
      </div>
    </div>
  );
};

export default CardDetailImage;
