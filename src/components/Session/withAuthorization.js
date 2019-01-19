import React from 'react';
import { withRouter } from 'react-router-dom';

const withAuthorization = () => Component => {
  class WithAuthorization extends React.Component {
    render() {
      return <Component {...this.props} />
    }
  }

  return WithAuthorization;
};

export default withAuthorization;