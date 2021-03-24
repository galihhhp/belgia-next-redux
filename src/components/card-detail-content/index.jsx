const CardDetailContent = ({
  name,
  shop,
  terjual,
  ulasan,
  diskusi,
  price,
  kondisi,
  berat,
  merk,
  stok,
  location,
  deskripsi,
  result,
}) => {
  return (
    <div className="card-detail-content">
      <div className="card-title">
        <h2 className="font-weight-bold">{name}</h2>
      </div>
      <div className="card-text">
        <p>{shop}</p>
      </div>

      <div className="card-text">
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
      </div>

      <div className="card-text">
        <h3 className="font-weight-bold">
          {
            (result =
              'Rp. ' +
              price.toLocaleString(undefined, {
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
              }))
          }
        </h3>
      </div>

      <div className="mt-4 card-detail-content__specification">
        <div className="card-detail-content__specification__title">
          <div className="card-text">
            <h4 className="font-weight-bold">Specification</h4>
          </div>
        </div>

        <div className="card-text">
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
      </div>

      <div className="mt-4 card-detail-content__description">
        <div className="card-detail-content__description__title">
          <div className="card-text">
            <h4 className="font-weight-bold">Description</h4>
          </div>
        </div>

        <div className=" mr-5 card-detail-content__specification--left">
          <div className="card-text">
            <p className="mb-1 pt-2">{deskripsi}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetailContent;
