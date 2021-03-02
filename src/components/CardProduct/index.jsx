import { Button } from 'components';
// import { addToCart } from 'state';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem } from '../../state/actions';

export const mapDispatchToProps = (dispatch, state) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    loading: state.loading,
  };
};

const CardProduct = ({ productData, addItem, loading, result }) => {
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
          <span className="pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <a> Add to wishlist</a>
              </span>
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
