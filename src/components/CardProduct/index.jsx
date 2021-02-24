import {product} from 'configs/product/product'
import  {Button}  from 'components'
import Link from 'next/link'

export const getStaticProps = async () => {
  return {
    props: {
      productList: product,
    },
  };
};



const CardProduct = ({img, id, name, location, price}) => {
  return (
    
      <div className="container pt-4 pb-3">
        <div className="card shadow-sm"style={{ width: '16rem' }} >

          <Link href={`catalog/${id}`}>
            <img src={img} alt={name} className="card-img-top btn"/>
          </Link>

          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h5 className="card-title">{price}</h5>
            <h8 className="card-subtitle mb-2 text-muted">{location}</h8>
            
            <div className="text-center pt-4">
            <Button label="add to cart" blue size="sm" />
            </div>
          </div>

        </div>
      </div>
  );
};

export default CardProduct;
