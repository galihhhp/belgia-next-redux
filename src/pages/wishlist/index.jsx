import { Title, Wishlist } from 'components';
import { connect } from 'react-redux';

export const mapStateToProps =  (state) => {
  return {
    wishlist: state.shop.wishlist,
  };
};

const Catalog = ({ wishlist }) => {
  return (
    <div>
      <Title label="Belgian - Catalog" />
      <div className="container pt-4 pb-4">
        <div className="card product">
          {wishlist.map((prod) => (
            <Wishlist key={prod.id} itemWishlist = {prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Catalog);
