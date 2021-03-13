import { Button,  Icon} from 'components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem, addToWishlist } from '../../state/actions';
import {useState, useEffect} from 'react'


const mapDispatchToProps = (dispatch, state) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    loading: state.loading,
    addToWishlist: (id) => dispatch(addToWishlist(id))

  };
};

const CardProduct = ({ productData, addItem, addToWishlist,loading, result, className }) => {
 
  return (
    <div className="container pt-4 pb-3 card-product">
      <div className="card shadow-sm" style={{ width: '16rem' }}>
        
          <div className="image-overlay">
          <img
            src={productData.img}
            alt={productData.name}
            className="card-img-top btn"
          />
         
          </div>
       

        <div className="card-body">
        <Link href={`catalog/${productData.id}`}>
          <h5 className="btn card-title">
          
            {productData.name}</h5>
            </Link>
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
            <span className="pt-2">
              <Button 
              label={'wishlist'}
              blue
              sixe="md"
              onClick={() => addToWishlist(productData.id)}
              />
              
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
