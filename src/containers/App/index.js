import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadItems } from '../../actions/itemsActions';

class App extends Component {

  componentWillMount() {
    this.props.loadItems();
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.items.map((item, index) => {
          return <li key={index}>{item.title}</li>
        })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    conditions: state.items.conditions,
    items: state.items.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
