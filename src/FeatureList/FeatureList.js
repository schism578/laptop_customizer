import React from 'react';
import './FeatureList.css';
import FEATURES from '../FEATURES';
import Features from '../Features/Features';

export default function FormSection(props) {
    const features = Object.keys(FEATURES)
      .map( key => 
        <Features 
          key={key}
          features={FEATURES}
          selected={props.selected}
          featureTitle={key}
          handleUpdate={props.handleUpdate} />
      ); 
  
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATION</h3>
        {features}
      </section>
    )
  }