import { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button } from 'components';
import { adjustItemQty, removeFromCart } from '../../state/actions';

const mapDispatchToProps = (dispatch, state) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    loading: state.loading,
  };
};

const CartItems = ({
  adjustQty,
  removeFromCart,
  itemData,
  loading,
  result,
}) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div className="cartItems">
      <div className="d-flex flex-row card shadow-sm" style={{ width: '30' }}>
        <div className="card shadow-sm" style={{ width: '16rem' }}>
          <Link href={`catalog/${itemData.id}`}>
            <img
              src={itemData.img}
              alt={itemData.name}
              className="fluid card-img-top btn"
            />
          </Link>
        </div>
        <div className="mt-5 ml-5 justify-align-items-center card-body">
          <h5 className="text-center pt-5 card-title">{itemData.name}</h5>
          <h5 className="font-weight-bold card-title">
            {
              (result =
                'Rp. ' +
                itemData.price.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }))
            }
          </h5>
        </div>
        <div className="text-center pt-4">
          <Button
            label="Remove"
            transparent
            size="md"
            onClick={() => removeFromCart(itemData.id)}
          />
          <label htmlFor="qty"> Qty </label>
          <div className="mr-3">
            <input
              min="1"
              type="number"
              width="5px"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CartItems);
