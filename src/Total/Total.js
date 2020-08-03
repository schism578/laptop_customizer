import React from 'react';
import './Total.css';

export default class Total extends React.Component {
    USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

    render() {
        return (
            <div className="summary__option__cost">
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.USCurrencyFormat.format(this.total)}
                </div>
                </div>
            </div>
        )
    }
}