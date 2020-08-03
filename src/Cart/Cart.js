import React from 'react';
import './Cart.css';
import Total from '../Total/Total';

export default class Cart extends React.Component {
    render() {
      return (
        <div className="summary__option" key={this.featureHash}>
            <section className="main__summary">
            <h2>Your cart</h2>
            <div className="summary__option__label">{this.props.feature} </div>
            <div className="summary__option__value">{this.selectedOption.name} </div>
            {this.summary}
        </section>
        </div>
      );
    }
}