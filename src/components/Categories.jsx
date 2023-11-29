import React from "react";
import "./css/Categories.css";

function Categories() {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid sofa"
              src="/src/assets/img/sofa.png"
              alt="sofas"
            />
            <p>sofas</p>
          </div>
          <div className="col-4 category-box text-center">
          <a href="/category/1"> <img
              className="img-fluid"
              src="/src/assets/img/chair.png"
              alt="chairs"
            /></a>
            <p>chairs</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid"
              src="/src/assets/img/tables.png"
              alt="tables"
            />
            <p>tables</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid"
              src="/src/assets/img/rack.png"
              alt="storage"
            />
            <p>storage & organization</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid"
              src="/src/assets/img/soapdispenser.png"
              alt="storage"
            />
            <p>deco</p>
          </div>
          <div className="col-4 category-box text-center">
            <img
              className="img-fluid category-tile"
              src="/src/assets/img/metallic_lamppng.png"
              alt="lightning"
            />
            <p>lightning</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
