import React from 'react';

export default class AdComponent extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render () {
    return (
      <ins className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='pub-2430408030851998'
        data-ad-slot='1347844416'
        data-ad-format='auto' 
        data-adtest="on"
        />
      );
    }
}