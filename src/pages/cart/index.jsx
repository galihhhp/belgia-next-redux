import { Title } from 'components';
import { CartItems } from 'components';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <div className="">
      <Title label="Belgian - Cart" />

      <div className="row pt-4 pb-4">
        <div className="card product col">
          {cart.length ? (
            cart.map((item) =>
              <>
                <CartItems key={item.id} itemData={item} />

                <div>
                  {/* <span>TOTAL: ({totalItems} items)</span>
          <span>{result='Rp'+ totalPrice.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}</span> */}
                </div>
              </>
            )) : (
              <div className="text-center pt-4 pb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21rem"
                  height="21rem"
                  fill="currentColor"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <h1 className="pt-3">YOUR SHOPPING CART IS EMPTY</h1>
                <Link href="/catalog">continue shopping</Link>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
