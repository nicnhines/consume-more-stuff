import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem, loadItems } from '../../actions/itemsActions';

class NewItem extends Component {
  constructor(props) {
    super();

    this.state = {
      title: '',
      description: '',
      price: 0,
      condition: '',
      category: '',
      status: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem({
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      category: this.state.category,
      status: this.state.status
    })

    this.setState({
      title: '',
      description: '',
      price: 0,
      condition: '',
      category: '',
      status: ''
    })
  }

  render() {
   
  }
}