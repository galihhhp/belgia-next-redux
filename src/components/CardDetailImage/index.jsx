import { Button } from 'components';

const CardDetailImage = ({img, id}) => {
  console.log({img, id})
  return (
    <div className="container">
      <div className="pt-4">
        <img src={img} alt={id}  />
      </div>
      <div className="text-center pt-4">
        <Button label="Add to cart" blue block mr size="sm" />
      
      </div>
    </div>
  );
};

export default CardDetailImage;
