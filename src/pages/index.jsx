import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem } from 'state';
import ROUTES from 'configs/routes';
import { Button, Title } from 'components';

const Home = ({ addItem, item }) => {
  return (
    <div>
      <Title label="Belgian - Home" />
      <h1>{item}</h1>
      <Button />
      <button onClick={addItem}>add item</button>
      <Link href={ROUTES.CART}>cart</Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(addItem()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
