const CardDetailContent = ({
  name,
  shop,
  terjual,
  ulasan,
  diskusi,
  kondisi,
  berat,
  merk,
  stok,
  location,
  deskripsi,
  price,
}) => {
  return (
    <div className="container pr-1 ml-4">
      <div className="card border-0">
        <h2 className="font-weight-bold">{name}</h2>
        <p>{shop}</p>
        <div className="d-flex">
          <p>
            Sold <span className="font-weight-bold ml-3">{terjual}</span>
          </p>
          <p className="mx-3">
            Review <span className="font-weight-bold ml-3">{ulasan}</span>
          </p>
          <p>
            Discussions <span className="font-weight-bold ml-3">{diskusi}</span>
          </p>
        </div>
        <h3 className="font-weight-bold">{price}</h3>

        <div className="mt-4 card-detail-content__specification">
          <div className="card-detail-content__specification__title">
            <h4 className="font-weight-bold">Specification</h4>
          </div>
          <div className="d-flex">
            <div className=" mr-5 card-detail-content__specification--left">
              <p className="mb-1 pt-2">Condition</p>
              <p className="mb-1">Weight</p>
              <p className="mb-1">Brand</p>
              <p className="mb-1">Stock</p>
              <p className="mb-1">Send from</p>
            </div>
            <div className="card-detail-content__specification--right">
              <p className="font-weight-bold mb-1 pt-2">{kondisi}</p>
              <p className="font-weight-bold mb-1">{berat}</p>
              <p className="font-weight-bold mb-1">{merk}</p>
              <p className="font-weight-bold mb-1">{stok}</p>
              <p className="font-weight-bold mb-1">{location}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 card-detail-content__description">
          <div className="card-detail-content__description__title">
            <h4 className="font-weight-bold">Description</h4>
          </div>
          <div className=" mr-5 card-detail-content__specification--left">
            <p className="mb-1 pt-2">{deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailContent;
