import { useState } from "react";
import Link from 'next/link'
import { connect } from "react-redux";
import {Button, Icon} from 'components'
import {
  adjustItemQty,
  removeFromCart,
} from "../../state/actions";




const CartItems = ({   
  adjustQty,
  removeFromCart,
  itemData,
  result}) => {
    const [input, setInput] = useState(itemData.qty);
    
    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustQty(itemData.id, e.target.value);
    };
  return (
    <div className="cart-items">
      <div className="pt-3 ml-3 mr-3 ">
        <div className="card mb-3 border border-dark" style={{maxWidth:"540px"}} >

          <div className="row g-0 ">

            <div className="col ">
              <Link href={`catalog/${itemData.id}`}>
              <img src={itemData.img} alt={itemData.name} style={{width:"200px"}}></img>
              </Link>
            </div>

            <div className="col">
                <div className="card-body">
                  <span className="float-right" >
                    <Icon name="trash"
                    width="25"
                    height="15"
                    onClick={() => removeFromCart(itemData.id)}
                    />
                  </span>

                  <div className="card-title">
                  <h4> {itemData.name} </h4>
                  </div>

                  <h5 className="card-text"> {
                    (result =
                      'Rp. ' +
                      itemData.price.toLocaleString(undefined, {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                      }))}
                  </h5>

                  <div className="card-text pt-2">
                    <label htmlFor="qty" className="pr-1"> Quantity: </label>
                      <input
                        min="1"
                        type="number"
                        width="5px"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                      />
                  </div>
                </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    loading: state.loading,
  };
};

export default connect(null, mapDispatchToProps) (CartItems)
