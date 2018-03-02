import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import '../NavigationBar/styles.css';

import { loadItems } from '../../actions/itemsActions';
import { setPageToDisplay } from '../../actions/pageDisplayActions';

import NavigationBar from '../../containers/NavigationBar';

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
        <NavigationBar />
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
