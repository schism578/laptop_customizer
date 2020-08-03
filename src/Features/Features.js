import React from 'react'
import FeatureOptions from '../FeatureOptions/FeatureOptions'

export default function Features(props) {
    const { 
        features, 
        selected, 
        featureTitle, 
        handleUpdate 
    } = props;
    
    const options = features[featureTitle].map((item, index) =>
      <FeatureOptions
        key={index}
        item={item}
        selected={selected}
        featureTitle={featureTitle}     
        handleUpdate={handleUpdate}
      />
    );
  
    return (
      <div className="feature">
        <div className="feature__name">{featureTitle}</div>
        <ul className="feature__list">
          {options}
        </ul>
      </div>
    );
  }