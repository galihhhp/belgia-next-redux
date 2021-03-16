import { Button,  Icon} from 'components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { addItem, addToWishlist } from '../../state/actions';



const mapDispatchToProps = (dispatch, state) => {
  return {
    addItem: (id) => dispatch(addItem(id)),
    loading: state.loading,
    addToWishlist: (id) => dispatch(addToWishlist(id))

  };
};

const CardProduct = ({ productData, addItem, addToWishlist,loading, result, className }) => {
  
  return (
   
      <div className="card-product">
        {productData.map((item)=>{
        return <div className="container pt-4 pb-3" key={item.id}>
        
          <div className="card shadow-sm" style={{ width: '16rem' }}>
          
          
              <div className="image-overlay">
              <img
                src={item.img}
                alt={item.name}
                className="card-img-top btn"
              />
            
              </div>
          

            <div className="card-body">
            <Link href={`catalog/${item.id}`}>
              <h5 className="btn card-title">
              
                {item.name}</h5>
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
                <span className="pt-2">
                  <Button 
                  label={'wishlist'}
                  blue
                  sixe="md"
                  onClick={() => addToWishlist(item.id)}
                  />
                  
                </span>
                <div className="pt-3">
                  <Button
                    label={loading ? 'Loading...' : 'Add to cart'}
                    blue size="md" onClick={() => addItem(item.id)}
                  />
                </div>
              </div>
            </div>
            

          </div>
          
        </div>
        })}
    </div>
  
  );

};

export default connect(null, mapDispatchToProps)(CardProduct);
