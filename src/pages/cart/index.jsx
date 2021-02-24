import { Title, CardBasket } from 'components';
import { product } from 'configs/product/product'


export const getStaticProps = async () => {
  return {
    props: {
      productList: product,
    },
  }
}

const Cart = ({productList}) => {
  return (
    <div>
      <div>
      <Title label="Belgian - Cart" />

      <div className="cart">
      <div className="container my-4 pt-3">
        <h5 className="pt-3"><strong>My Cart</strong></h5>
        <div className="card basket">
        
          {productList.map((productList) => (
          <CardBasket key={productList.id} {...productList} />
          ))}
      
        </div>
      </div>
      </div>
      </div>
    </div>
        

  );
};
// const Cart = () => {
//   return (
//     <div>
//       <Title label="Belgian - Cart" />

//       <div className="cart">
//       <div className="container my-4 pt-3">
//         <h5 className="pt-3"><strong>My Cart</strong></h5>
//       </div>
//       </div>
//     </div>
//   );
// };

export default Cart;
