import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends Component {
  renderButton = () => {
    if (this.props.auth) {
      return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    }

    return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  }

  renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Posts</Link>
      </li>
      <li>{this.renderButton()}</li>
    </ul>
  );

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={ CommentBox } />
        <Route path="/" exact component={ CommentList } />
      </div>
    );
  };
};

const mapStateToProps = state => ({ auth: state.auth })

export default connect(mapStateToProps, actions)(App)