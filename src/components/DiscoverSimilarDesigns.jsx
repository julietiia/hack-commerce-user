import React from 'react'

function DiscoverSimilarDesigns() {
  return (
   
    <div className="row g-5 similar-design-background">
                <div className="col-3">
                  <a href="#">
                    <img
                      className="image-product-suggested"
                      src="/src/assets/img/liam_chair.webp"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <p className="text-similar-design-name text-start mt-2">
                      Liam Chair
                    </p>
                  </a>
                  <a href="#">
                    <p className="text-similar-design-name fw-bold text-start">
                      0.000UYU
                    </p>
                  </a>
                </div>

                <div className="col-3">
                  <div>
                    <a href="#">
                      <img
                        className="image-product-suggested "
                        src="/src/assets/img/floria_chair.webp"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name text-start mt-2">
                        Floria Chair
                      </p>
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name fw-bold text-start">
                        0.000UYU
                      </p>
                    </a>
                  </div>
                </div>

                <div className="col-3 mb-5">
                  <div>
                    <a href="#">
                      <img
                        className="image-product-suggested"
                        src="/src/assets/img/charlotte_chair.png"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name text-start mt-2">
                        Charlotte Chair
                      </p>
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name fw-bold text-start">
                        0.000UYU
                      </p>
                    </a>
                  </div>
                </div>

                <div className="col-3">
                  <div>
                    <a href="#">
                      <img
                        className="image-product-suggested"
                        src="/src/assets/img/wallie_chair.png"
                        alt=""
                      />
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name text-start mt-2">
                        Wallie curvature Chair
                      </p>
                    </a>
                    <a href="#">
                      <p className="text-similar-design-name fw-bold text-start">
                        0.000UYU
                      </p>
                    </a>
                  </div>
                </div>
              </div>
           
  )
}

export default DiscoverSimilarDesigns