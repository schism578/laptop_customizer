import React from 'react';
import './Total.css';

export default class Total extends React.Component {

    render() {
        return (
            <div className="summary__option__cost">
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {USCurrencyFormat.format(this.total)}
                
                </div>
                </div>
            </div>
        )
    }
}