import { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Button } from 'components';
import { removeFromCart } from '../../state/actions';

const mapDispatchToProps = (dispatch, state) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    loading: state.loading,
  };
};

const Wishlist = ({
  removeFromCart,
  itemWishlist,
  loading,
  result
}) => {
  return (
    <div className="wishlist">
      <div className="container card shadow-sm" style={{ width: '18rem' }}>
        <div className="card shadow-sm" style={{ width: '16rem' }}>
          <Link href={`catalog/${itemWishlist.id}`}>
            <img
              src={itemWishlist.img}
              alt={itemWishlist.name}
              className="fluid card-img-top btn"
            />
          </Link>
        </div>
        <div className="mt-3 ml-3 card-body">
          <h5 className="text-center pt-3 card-title">{itemWishlist.name}</h5>
          <h5 className="font-weight-bold card-title">
            {
              (result =
                'Rp. ' +
                itemWishlist.price.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }))
            }
          </h5>
          <h5 className="text-center pt-3 card-title">{itemWishlist.location}</h5>
        </div>
        <div className="text-center pt-2">
          <Button
            label="Remove"
            transparent
            size="md"
            onClick={() => removeFromCart(itemWishlist.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Wishlist);
