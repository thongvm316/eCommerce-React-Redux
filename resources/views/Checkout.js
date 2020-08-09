import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";

export const Checkout = () => {
 
    return (
      <Fragment>
        <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  defaultValue=""/>
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                defaultValue=""/>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                defaultValue="" />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  property=""
                  defaultValue="" />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  property=""
                  defaultValue="" />
              </div>
            </div>
            <br />
            <button
              type="button"
              className="btn btn-light btn-lg btn-block bg-crimson">
              <a href="#" className="white">
                Confirm
              </a>
            </button>
          </form>
        </div>
      </Fragment>
    );
}