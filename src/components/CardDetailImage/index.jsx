import { Button } from 'components';
import { addToCart } from 'state';
import { useDispatch, useSelector } from 'react-redux';

const CardDetailImage = ({ img, id }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="pt-4">
        <img src={img} alt={id} />
      </div>
      <div className="text-center pt-4">
        <Button
          label={state.loading ? 'Loading...' : 'Add to cart'}
          blue
          block
          mr
          size="sm"
          onClick={(id) => dispatch(addToCart(id))}
        />
      </div>
    </div>
  );
};

export default CardDetailImage;
