import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadItems } from '../../actions/itemsActions';
import { setPageToDisplay } from '../../actions/pageDisplayActions';

class App extends Component {

  componentWillMount() {
    this.props.loadItems();
  }

  contentDisplayer() {
    switch (this.props.currentPage) {
      case `homePage`:
        return <div>HOME PAGE VIEW</div>;
      default:
        return <div>HOME PAGE VIEW</div>;
    }
  }

  render() {
    return (
      <div className='outer_page_container'>
        <div>HEADER GOES HERE</div>
        <div className='app_content'>
          {this.contentDisplayer()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.items.categories,
    conditions: state.items.conditions,
    items: state.items.items,
    currentPage: state.pageDisplay.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadItems: () => {
      dispatch(loadItems());
    },
    setPageToDisplay: page => {
      dispatch(setPageToDisplay(page));
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
