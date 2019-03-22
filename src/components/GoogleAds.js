import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({})
  }

  render() {
    const style = {
      display: 'block'
    }
    return (
      <div className='ad'>
        <ins className='adsbygoogle'
            style={style}
            data-ad-client={process.env.REACT_APP_DATA_AD_CLIENT}
            data-ad-format="auto"
            data-ad-slot={process.env.REACT_APP_DATA_AD_SLOT}
            >
        </ins> 
      </div>
    );
  }
}