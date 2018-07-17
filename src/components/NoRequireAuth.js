import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class NotAuthentication extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/challenges/regression/1');
      }
    }
    
    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/challenges/regression/1');
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