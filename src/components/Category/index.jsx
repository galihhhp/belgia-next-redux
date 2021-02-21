
const Category = () => {
  return (
    <div>
      <div className="container pt-4">
        <div className="card">
          <div className="card-body ml-4">

            <div className="row">
              <h4>Katalog Produk</h4>
            </div>

            <div className="row pt-4 pb-2">

              <button type="button" className="btn btn-light mr-3 rounded-pill">Makanan & Minuman</button>
              <button type="button" className="btn btn-light mr-3 rounded-pill">Fashion</button>
              <button type="button" className="btn btn-light mr-3 rounded-pill ">Elektronik</button>
              <button type="button" className="btn btn-light mr-3 rounded-pill">Lainnya</button>
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
