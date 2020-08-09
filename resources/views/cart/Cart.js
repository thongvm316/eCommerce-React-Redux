import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../styles/App.css";


export const CartPage = () => {
    return (
      <Fragment>
        <div className="row">
          <div className="col-sm cart">
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Order Summary</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Subtotal</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul
                  className={`list-group flex ${
                    subTotal <= 0 ? "lightGray" : ""
                  }`}
                >
                  <li className="text-left">shipping</li>
                  <li className="text-right">€€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Add Coupon Code</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€€0.00</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled={!items.length}
            >
              <a href="#" className="white">
                Checkout
              </a>
            </button>
          </div>
        </div>
      </Fragment>
    );
}