import { Title } from 'components';
import { CartItems, Button } from 'components';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from '../../components/icon';
import { checkoutAction } from '../../state/actions';

const Cart = ({ cart, result }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  return (
    <div className="container pt-3 cart-page">
      <Title label="Belgian - Cart" />

      <div className="card pt-4 pb-4">
        <div className="row">
          <div className="col">
            {cart.length ? (
              cart.map((item) => <CartItems key={item.id} itemData={item} />)
            ) : (
              <div className="text-center pt-4 pb-4">
                <Icon name="cartempty" height="25rem" width="25rem" />
                <h1 className="pt-3">YOUR SHOPPING CART IS EMPTY</h1>
                <Link href="/catalog">continue shopping</Link>
              </div>
            )}
          </div>
          <div className="col">
            <div className=" pt-3 pr-3 pl-3 pb-3">
              <div className="card pb-3 border border-dark">
                <div className="pl-3">
                  <h1 className="card-title">CART SUMMARY</h1>
                  <h5 className="card-text">TOTAL: {totalItems} items</h5>
                  <h5 className="card-text">
                    {' '}
                    {
                      (result =
                        'Rp. ' +
                        totalPrice.toLocaleString(undefined, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        }))
                    }
                  </h5>
                  <div className="pt-3 pb-3">
                    <Button
                      blue
                      label="checkout"
                      size="md"
                      onClick={(cart) => checkoutAction(cart.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, dispatch) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
