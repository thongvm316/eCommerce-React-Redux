import React, { Fragment, useState, useEffect } from 'react';
import { Navbar } from '../../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import '../../styles/App.css'
import { list } from  "../../data"
import { Checkout } from './Checkout';
import { Confirm } from './confirm'
import UserProfileContextProvider from '../../lib/UserProfileContext'

const App = props => {
  const { items, saveLocalStorage } = props;
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(null)
  const [count, setCount] = useState(1)
  const localCategory = (i) => {
    setCategory(i)
  }
  const filterResults = (input) => { 
    let fullList = list.flat() // chuyen list(gom 5 mang con) thanh tap hon 38 phan tu trong 1 mang duy nhat
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase();
      // console.log(name);
      const term = input.toLowerCase();
      return name.indexOf(term) !== -1 
    })
    setFiltered(results)
  }

  useEffect(() => {
    saveLocalStorage(items)
  }, [items])

  

  // console.log(filtered);
  return (
    <Fragment>
      <Router>
        <UserProfileContextProvider>
          <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>
          {/* Routes */}
          <Route exact path="/" component={() => <Home
                                                  category={category}
                                                  localCategory={localCategory}
                                                  list={list}
                                                  isFiltering={isFiltering}
                                                  filtered={filtered}/>
                                                  }/>
          <Route exact  path="/cart" component={CartPage}/>
          <Route exact  path="/checkout" component={Checkout}/>
          <Route exact  path="/delivery" component={Confirm}/>
         </UserProfileContextProvider>
      </Router>
    </Fragment>
  );
}
export default App;

