import React from 'react';
import './Price.css';

export default class Price extends React.Component {
   USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

    render() {
        return (
            <div>
                {USCurrencyFormat.format(selectedOption.cost)}
            </div>
        )
    }

}