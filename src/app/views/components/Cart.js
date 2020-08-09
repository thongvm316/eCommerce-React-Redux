import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateCart, removeFromCart } from '../../lib/actions'
import { Link } from "react-router-dom";
import "../../styles/App.css";


const Row = (props) => {
  // console.log(props)
  const { id, quantity, details } = props.item
  const item = details
  const [ qty, setQty ] = useState(quantity);
  const dispatch = useDispatch()
  const update = (id, quantity) => {
    dispatch(updateCart(id, quantity))
  }
/* Prolems: Tai sao khi click, qty + 1 -> qua line update, qty ko update -> thieu 1 khi tinh so luong */
  const remove = (id) => {
    dispatch(removeFromCart(id))
  }

  useEffect(() => {
    // console.log(qty)
    update(id, qty)
  }, [qty])

    return (
      <tr>
        <td>
          <img
            width="70"
            height="70"
            src={`/assets/${item.category}/${item.image}`}
            alt={item.name}
          />
        </td>
        <td>{item.ref}</td>
        <td>€{item.price}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                if (qty > 1) {
                  setQty(qty - 1)
                  // update(id, quantity - 1)
                }
              }}  
            >
              -
            </button>
              <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setQty(qty + 1)
                // update(id, quantity + 1)
              }}
            >
              +
            </button>
          </div>
        </td>
          <td>€{ (quantity * item.price).toFixed(2) }</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove"
            onClick={() => { remove(props.item) }}
          >
            X
          </button>
        </td>
      </tr>
    );
}

const Table = ({items}) => {
    return (
      <table>
        <tr>
          <th width="200">Product</th>
          <th width="80">Reference</th>
          <th width="150">Price</th>
          <th width="150">Quantity</th>
          <th width="200">Total</th>
        </tr>
        {
          items.map((item, i) => <Row i={i} item={item}/>)
        }
      </table>
    );
}

export const CartPage = () => {
  const items = useSelector(state => state.items);
  const [ subTotal, setSubTotal] = useState(0.00);
  const [ total, setTotal] = useState(0.00);
  const shipping = 10.00;


  useEffect(() => {
    let totals = items.map(item => item.quantity * item.details.price)
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0)) 
    setTotal(subTotal + shipping)
  }, [items, subTotal, total]) // Why useEfect -> Neu ko use it, react chua render first, da change state -> error
    return (
      <Fragment>
        <div className="container">
            <div className="row">
            <div className="col-sm cart">
                <Table items={items}/>
            </div>
            <div className="col-sm-3 order-summary">
                <ul className="list-group">
                <li className="list-group-item">Order Summary</li>

                <li className="list-group-item">
                    <ul className="list-group flex">
                      <li className="text-left">Subtotal</li>
                      <li className="text-right">€{subTotal.toFixed(2)}</li>
                    </ul>
                    <ul className="list-group flex">
                      <li className="text-left">shipping</li>
                      <li className="text-right">€{shipping.toFixed(2)}</li>
                    </ul>
                    <ul className="list-group flex">
                      <li className="coupon crimson">
                          <small>Add Coupon Code</small>
                      </li>
                    </ul>
                </li>

                <li className="list-group-item ">
                    <ul className="list-group flex">
                    <li className="text-left">Total</li>
                    <li className="text-right">€{subTotal === 0.00 ? "0.00" : total.toFixed(2)}</li>
                    </ul>
                </li>
                </ul>
                <Link to="/checkout" className={`btn btn-light ${!items.length && 'disabled'} btn-lg btn-block checkout bg-crimson`}
                >
                  Checkout 
                </Link>
            </div>
            </div>
        </div>
      </Fragment>
    );
}
