import React from 'react';
import CardContainer from './ProductCards';
import Nav from './Navigation';
import { BuyModalWindow } from './BuyModalWindow';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
    this.showBuyModalWindow = this.showBuyModalWindow.bind(this);
    this.toggleBuyModalWindow = this.toggleBuyModalWindow.bind(this);
  }
  toggleBuyModalWindow() {
    const state = this.state;
    const newState = Object.assign({}, state, {showBuyModal: !state.showBuyModal});
    this.setState(newState);
  }
  showBuyModalWindow(id, price){
    console.log(id)
    console.log(price);
    const state = this.state;
    const newState = Object.assign({},state,{showBuyModal: true,productid:id,price:price});
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav></Nav>
            <div className='container pt-4 mt-4'>
              <Route exact path="/" render={() => <CardContainer location='cards.json' showBuyModal={this.showBuyModalWindow} />} />
              <Route path="/promos" render={() => <CardContainer location='/promos' showBuyModal={this.showBuyModalWindow} promo={true} /> } />
            </div>
            <BuyModalWindow showModal={this.state.showBuyModal} toggle={this.toggleBuyModalWindow}  productid={this.state.productid} price={this.state.price}/>
          </div>
        </Router>
        

      </div>  
    );
  }
}