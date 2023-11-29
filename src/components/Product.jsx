import "./css/Product.css";
import AddToCartButton from "./AddToCartButton";
import Collapse from "react-bootstrap/Collapse";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import DiscoverSimilarDesigns from "./DiscoverSimilarDesigns";

function Product() {
  const [productDetailsOpen, setProductDetailsOpen] = useState(false);
  const [shippingReturnsOpen, setShippingReturnsOpen] = useState(false);
  const [stockAvailableOpen, setStockAvailableOpen] = useState(false);

  return (
    <>
      <div className="body-page">
        <section className="product-details">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img
                  className="product-image img-fluid"
                  src="/src/assets/img/alexia_chair_lifestyle.webp"
                  alt="chair"
                />
              </div>
              <div className="col-6">
                <div className="text-start">
                  <h6 className="text-start">Alexia chair</h6>
                  <p className="fw-bold text-start">0.000UYU</p>
                  <p className="text-start product-description">REF.</p>
                  <p className="text-start product-description">
                    This armchair lends a luxurious interpretation of modernist
                    silhouettes to your space. Tri-leg chair features cushions
                    at seat and back, set on a wrapped and folded structure that
                    feels so fresh and unexpected. This custom piece of
                    furniture will be made to order just for you. Available
                    exclusively at Urban Outfitters. Medidas: 52X34X62CM
                  </p>
                </div>
                <div>
                  <select
                    name="quantity"
                    id="quantity"
                    className="m-2 btn btn-dark text-white text-select"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <AddToCartButton />
                </div>
                <div className="container mt-4">
                  <div>
                    <p
                      className="product-features text-start mt-4 fw-bold"
                      role="button"
                      onClick={() => setProductDetailsOpen(!productDetailsOpen)}
                      aria-controls="productDetails"
                      aria-expanded={productDetailsOpen}
                    >
                      Product details
                    </p>
                    <Collapse in={productDetailsOpen}>
                      <div id="productDetails">
                        <Card>
                          <Card.Body>
                            <p className="collapse-details-text text-start">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit. Cumque illum beatae accusantium
                              amet qui quibusdam?
                            </p>
                          </Card.Body>
                        </Card>
                      </div>
                    </Collapse>

                    <p
                      className="product-features text-start fw-bold"
                      role="button"
                      onClick={() =>
                        setShippingReturnsOpen(!shippingReturnsOpen)
                      }
                      aria-controls="shippingReturns"
                      aria-expanded={shippingReturnsOpen}
                    >
                      Shipping + Returns
                    </p>
                    <Collapse in={shippingReturnsOpen}>
                      <div id="shippingReturns">
                        <Card>
                          <Card.Body>
                            <p
                              className="collapse-details-text text-start"
                              role="button"
                            >
                              Shipping and Returns details go here.
                            </p>
                          </Card.Body>
                        </Card>
                      </div>
                    </Collapse>

                    <p
                      className="product-features text-start fw-bold"
                      role="button"
                      onClick={() => setStockAvailableOpen(!stockAvailableOpen)}
                      aria-controls="stockAvailable"
                      aria-expanded={stockAvailableOpen}
                    >
                      Stock available in store
                    </p>
                    <Collapse in={stockAvailableOpen}>
                      <div id="stockAvailable">
                        <Card>
                          <Card.Body>
                            <p className="collapse-details-text text-start">
                              Stock availability information goes here.
                            </p>
                          </Card.Body>
                        </Card>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <section>
            <div className="container similar-products-background">
              <div className="row mt-5">
                <div className="col-6 mt-5">
                  <p className="text-discover-designs fw-bold text-start">
                    Discover similar designs
                  </p>
                </div>
              </div>
              <DiscoverSimilarDesigns />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Product;
