import React from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import './Features.css';
import Price from './Price/Price';

export default class Features extends React.Component {
    features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
        });
    });

    render() {
            return (
                <div key={this.itemHash} className="feature__item">
                    <input
                        type="radio"
                        id={this.itemHash}
                        className="feature__option"
                        name={slugify(feature)}
                        checked={item.name === this.state.selected[feature].name}
                        onChange={e => this.updateFeature(feature, item)}
                        />
                </div>
                );
            };
}