import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Navigation from './Navigation';
class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="card mb-3">
                <img className="card-img-top" src={this.props.img} alt={this.props.imgalt} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.productName}</h4>
                    Price: <strong>{this.props.price}</strong>
                    <p className="card-text">{this.props.desc}</p>
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
  }
}
class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cards: []};
  }
  componentDidMount() {
    fetch('cards.json')
    .then(rs => rs.json())
    .then((result) => {
      this.setState({cards: result});
    })

  }
  render() {
    const cards = this.state.cards;
    const cardItems = cards.map(card => <Card key={card.id} {...card} promo={this.props.promo} showBuyModal={this.props.showBuyModal} />);
    return (
      <div>
        {cardItems}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


