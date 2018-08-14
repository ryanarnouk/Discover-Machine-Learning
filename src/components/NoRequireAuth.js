import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/profile'); // CHANGE THIS BACK TO LESSONS TESTING PURPOSES
      }
    }
    
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/profile'); // CHANGE THIS BACK TO LESSONS TESTING PURPOSES
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  
  return connect(mapStateToProps)(NotAuthentication);
}