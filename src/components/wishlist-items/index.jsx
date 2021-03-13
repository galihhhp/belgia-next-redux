import { useState } from "react";
import Link from 'next/link'
import { connect } from "react-redux";
import {Button, Icon} from 'components';
import {
    adjustItemQty,
    removeFromCart,
  } from "../../state/actions";





export const WishlistItem = ({productData, result}) => {
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
                        label= 'Add to cart'
                        blue size="md" onClick={() => addItem(productData.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </div>
    )
}

export const mapDispatchToProps = (dispatch, state) => {
    return {
       
      };
}

export default connect (null, mapDispatchToProps) (WishlistItem)
