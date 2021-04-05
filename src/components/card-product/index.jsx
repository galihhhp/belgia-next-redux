import {React} from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem, addToWishlist } from '../../state/actions';
import { Fab } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from 'react';
import { AwesomeButtonProgress } from 'react-awesome-button';

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    addToWishlist: (id) => dispatch(addToWishlist(id)),
  };
};

const CardProduct = ({ productData, addItem, addToWishlist, result }) => {
  const [liked, setLiked] = useState(false);
  const [counter, setCounter] = useState(0);
  return (
    <div className="card-product">
      {productData.map((item) => {
        return (
          <div className="container pt-4 pb-3" key={item.id}>
            <div className="card shadow-sm" style={{ width: '16rem' }}>
              <div className="image-overlay">
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top btn"
                />
              </div>
              <div className="positioner">
                <div className="icon">
                  <Fab aria-label="like" size="small">
                    <FavoriteIcon
                      onClick={() => {
                        addToWishlist(item.id);
                        setLiked(!liked);
                        setCounter(item.id);
                      }}
                      color={liked && item.id == counter ? 'secondary' : 'dark'}
                    />
                  </Fab>
                </div>
              </div>

              <div className="card-body">
                <Link href={`catalog/${item.id}`}>
                  <h5 className="btn card-title">{item.name}</h5>
                </Link>
                <h5 className="card-title">
                  {
                    (result =
                      'Rp. ' +
                      item.price.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }))
                  }
                </h5>
                <h8 className="card-subtitle mb-2 text-muted">
                  {item.location}
                </h8>

                <div className="text-center pt-3">
                  <div className="pt-3">
                    <AwesomeButtonProgress
                      size="large"
                      type="primary"
                      action={(element, next) => {
                        setTimeout(() => {
                          addItem(item.id);
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
        );
      })}
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CardProduct);
