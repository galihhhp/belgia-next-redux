import { Button } from 'components';
// import { addToCart } from 'state';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem, addWishlist } from '../../state/actions';

export const mapDispatchToProps = (dispatch, state) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    addWishlist: (id) => dispatch(addWishlist(id)),
    loading: state.loading,
  };
};

const CardProduct = ({ productData, addItem, addWishlist, loading, result }) => {
  return (
    <div className="container pt-4 pb-3">
      <div className="card shadow-sm" style={{ width: '16rem' }}>
        <Link href={`catalog/${productData.id}`}>
          <img
            src={productData.img}
            alt={productData.name}
            className="card-img-top btn"
          />
        </Link>

        <div className="card-body">
          <h5 className="card-title">{productData.name}</h5>
          <h5 className="card-title">
            {' '}
            {
              (result =
                'Rp. ' +
                productData.price.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }))
            }{' '}
          </h5>
          <h8 className="card-subtitle mb-2 text-muted">
            {productData.location}
          </h8>

          <div className="text-center pt-3">
          <div className="pt-3">
            <Button
              label={loading ? 'Loading...' : 'Add to wishlist'}
              blue size="md" onClick={() => addWishlist(productData.id)}
            />
            </div>
              <div className="pt-3">
            <Button
              label={loading ? 'Loading...' : 'Add to cart'}
              blue size="md" onClick={() => addItem(productData.id)}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CardProduct);
