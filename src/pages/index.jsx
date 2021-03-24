import { useRouter } from 'next/router';
import ROUTES from 'configs/routes';
import { Title, Button } from 'components';

const Home = () => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(ROUTES.CATALOG);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center home">
      <Title label="Belgian - Home" />
      <div 
      className="d-flex flex-column justify-content-center align-items-center w-100 home__content" 
      data-aos="zoom-in">
        <h1>Welcome to Belgian Shop</h1>
        <h4 className="mb-5">
          We provide all your needs and you can get it from home
        </h4>
        <Button
          label="See our products"
          blue
          size="lg"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Home;
