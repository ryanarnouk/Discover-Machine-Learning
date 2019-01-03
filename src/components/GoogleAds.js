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
      <ins className='adsbygoogle'
           style={style}
           data-ad-client="ca-pub-2430408030851998"
           data-ad-format="auto">
      </ins> 
    );
  }
}