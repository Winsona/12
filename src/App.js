import React, { Component, Fragment } from 'react';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Blockdetails from './components/Blockdetails.js'
import PaymentDetails from './components/PaymentDetails.js'
import CustomerDetails from './components/CustomerDetails.js'




export default function App() {
  return (
    <Router>
            <div className="container">

              <div className="row">
                  <h1 className="mt-3">
                    Mother's Village
                  </h1>
                  <hr className="mb-3"></hr>
              </div>

              <div className="row">
                <div className="col-md-2">
                  <nav>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/">Home</Link>
                      </li>                
                     
                      <li className="list-group-item">
                        <Link to="/CustomerDetails">Customer Details</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/PaymentDetails">Payment Details</Link>
                      </li>
                      <li className="list-group-item">
                        <Link to="/Blockdetails">Block details</Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="col-md-10">
                  <Switch>
                  <Route path="/CustomerDetails">
                      <CustomerDetails />
                    </Route>
                    <Route path="/PaymentDetails">
                      <PaymentDetails />
                    </Route>
                    <Route path="/Blockdetails">
                      <Blockdetails />
                    </Route>
                    <Route path="/">
                      <Home />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>
}


