import { Title, WishlistItem } from 'components';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



const WishlistPage = ({ wishlistPage }) => {
  return (
    <div>
      <Title label="Belgian - Wishlist" />

      <div className="container pt-4 pb-2">
        <div className="card">
          <h4 className="pt-4 pb-3 pl-2 font-weight-bold">Your Wishlist</h4>
        </div>
      </div>
        

      <div className="container pt-2 pb-4">
        <div className="card product">
          {wishlistPage.map((wishlist) => (
            <WishlistItem key={wishlist.id} productData={wishlist} />
          ))}
        </div>
        </div>
      </div>
  );
};

export const mapStateToProps =  (state) => {
  return {
    wishlistPage: state.wlist.wishlistPage,
  };
};

export default connect(mapStateToProps)(WishlistPage);
