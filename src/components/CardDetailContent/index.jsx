const CardDetailContent = () => {
  return (
    <>
      <div className="card-detail-content__main">
        <h2 className="font-weight-bold">
          Hammerstout - Grind Denim Pants - Selvedge Accen
        </h2>
        <p>Hammerstout Shop</p>
        <div className="d-flex">
          <p>
            Sold <span className="font-weight-bold ml-3">234</span>
          </p>
          <p className="mx-3">
            Review <span className="font-weight-bold ml-3">234</span>
          </p>
          <p>
            Discussions <span className="font-weight-bold ml-3">234</span>
          </p>
        </div>
        <h3 className="font-weight-bold">Rp 250.000</h3>
      </div>
      <div className="mt-4 card-detail-content__specification">
        <div className="card-detail-content__specification__title">
          <h2 className="font-weight-bold">Specification</h2>
        </div>
        <div className="d-flex">
          <div className=" mr-5 card-detail-content__specification--left">
            <p className="mb-1">Condition</p>
            <p className="mb-1">Weight</p>
            <p className="mb-1">Brand</p>
            <p className="mb-1">Stock</p>
            <p className="mb-1">Send from</p>
          </div>
          <div className="card-detail-content__specification--right">
            <p className="font-weight-bold mb-1">New</p>
            <p className="font-weight-bold mb-1">500 gram</p>
            <p className="font-weight-bold mb-1">Hammerstout</p>
            <p className="font-weight-bold mb-1">22</p>
            <p className="font-weight-bold mb-1">Jakarta, Indonesia</p>
          </div>
        </div>
      </div>
      <div className="mt-4 card-detail-content__description">
        <div className="card-detail-content__description__title">
          <h2 className="font-weight-bold">Description</h2>
        </div>
        <div className=" mr-5 card-detail-content__specification--left">
          <p className="mb-1">Condition</p>
          <p className="mb-1">Weight</p>
          <p className="mb-1">Brand</p>
          <p className="mb-1">Stock</p>
          <p className="mb-1">Send from</p>
          <p className="mb-1">Condition</p>
          <p className="mb-1">Weight</p>
          <p className="mb-1">Brand</p>
          <p className="mb-1">Stock</p>
          <p className="mb-1">Send from</p>
        </div>
      </div>
    </>
  );
};

export default CardDetailContent;
