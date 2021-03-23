import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Button } from 'components';
import { addItem } from '../../state/actions';
import { Fab } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { removeFromWishlist } from '../../state/actions';
import { AwesomeButtonProgress } from 'react-awesome-button';

export const WishlistItem = ({ productData, result }) => {
  const dispatch = useDispatch();
  return (
    <div className="wishlist-item">
      <div className="container pt-4 pb-3">
        <div className="card shadow-sm" style={{ width: '16rem' }}>
          <Link href={`catalog/${productData.id}`}>
            <img
              src={productData.img}
              alt={productData.name}
              className="card-img-top btn"
            />
          </Link>
          <div className="positioner">
            <div className="icon">
              <Fab aria-label="like" size="small">
                <DeleteIcon
                  onClick={() => dispatch(removeFromWishlist(productData.id))}
                />
              </Fab>
            </div>
          </div>

          <div className="card-body">
            <h5 className="card-title">{productData.name}</h5>
            <h5 className="card-title">
              {
                (result =
                  'Rp. ' +
                  productData.price.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }))
              }
            </h5>
            <h8 className="card-subtitle mb-2 text-muted">
              {productData.location}
            </h8>

            <div className="text-center pt-3">
              <div className="pt-3">
                <AwesomeButtonProgress
                  size="large"
                  type="primary"
                  action={(element, next) => {
                    setTimeout(() => {
                      dispatch(addItem(productData.id));
                      next();
                    }, 600);
                  }}
                >
                  Add to Cart
                </AwesomeButtonProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
