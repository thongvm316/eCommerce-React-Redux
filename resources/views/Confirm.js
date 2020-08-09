import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserProfileContext } from "../lib/UserContext";
import { Redirect } from "react-router-dom";
import FirebaseAPI from "../config/Firebase";
import "../styles/App.css";
import "./Confirm.css";


export const Confirm = () => {
    return (
        <Fragment>
      <div class="jumbotron text-center">
        <h1 class="display-3">Thank You!</h1>
        <hr />

        <p class="lead">
          <strong>Your order is on its way to your home</strong>
          <br /> <br />
          <Link class="btn btn-primary btn-sm" to="/">
            Continue to homepage
          </Link>
        </p>
        <br />
        
      </div>
    </Fragment>
    );
}