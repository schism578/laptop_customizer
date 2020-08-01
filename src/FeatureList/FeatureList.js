import React from 'react';
import './FeatureList.css';
import Features from './Features/Features';

export default class FeatureList extends React.Component {
    render() {
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {this.features}
        </form>
    )}
}