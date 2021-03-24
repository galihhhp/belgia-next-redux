import { Button } from 'components';
import { addItem } from 'state';
import { useDispatch, useSelector } from 'react-redux';

const CardDetailImage = ({ img, id }) => {
  return (
    <div>
      <img src={img} alt={id} className="img-fluid " />
    </div>
  );
};

export default CardDetailImage;
