import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">
      <a href="" className="navbar-brand crimson">
        <i class="fas fa-shopping-cart"></i> Mes Courses en Ligne
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"/>
            </form>
          </div>
          <div className="menu-right">
            {/* cart */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};

export const Card = () => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/0/citron.png`}
          alt="citron"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <h4>Citron</h4>
            </div>
            <div className="col-sm-6">
              <p>
                €2.99/unit
              </p>
              <button className="btn btn-warning btn-sm">view product</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </div>
  );
};


export const Modal = () => {
  return (
    <div
      class="modal fade "
      id=""
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Citrons</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/0/citron.png`
                  }
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">€1.99</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                  <span className="btn btn-light qty">1</span>
                  <button
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export const List = () => {
  return (
    <div className="col-sm">
      <div className="row">
        {/* card */}
      </div>
    </div>
  );
};
