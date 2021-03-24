import {Trash} from './trash-button';
import {CartEmpty} from './cart-empty'

const Icon = props => {

    if (props.name.toLowerCase()== 'trash') {
        return <div className="icon-trash "data-toggle="tooltip" data-placement="top" title="remove from cart" >
        <div className="btn">
        <Trash {...props} /> 
        </div>
        </div>
    } else if (props.name.toLowerCase() == 'cartempty') {
        return <CartEmpty {...props}/>
        
    }  else {
        return <div />
    }
    
};

export default Icon;
