import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../actions/itemsActions';

class NewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      price: '',
      condition: '',
      category: '',
      status: '',
      image_url: ''
    };
  };
 

 handleChange(event) {
   this.setState({
     [event.target.name] : event.target.value
   });
 };

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state)
    this.setState({
      title: '',
      description: '',
      price: '',
      condition: '',
      category: '',
      status: '',
      image_url: ''
    });
  };

  render() {
    return (
      <div>
        <div className="addNewItemContainer">
          <form onSubmit={ this.handleSubmit.bind(this) }> 
            <button type="button" className="close-btn" onClick={this.props.hideAddForm}>x</button>          
            <br />
              <input 
                type="text"
                name="title"
                placeholder="TITLE"
                className="inputField"
                value={ this.state.title }
                onChange={ this.handleChange.bind(this) }
              />
              <br />
              <br />
              <input
                type="text"
                name="description"
                placeholder="DESCRIPTION" 
                className="inputField"
                value={ this.state.description }
                onChange={ this.handleChange.bind(this) }
              />
              <br />
              <br />
              <input 
                type="integer"
                name="price"
                placeholder="PRICE"
                className="inputField"
                value={ this.state.price }
                onChange={ this.handleChange.bind(this) }
              />
              <br />
              <br />
              <select
                name="condition"
                value={ this.state.condition }
                onChange={ this.handleChange.bind(this) }>
                <option value="">CONDITION</option>
                <option value="new">New</option>
                <option value="like new">Like New</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="salvage">Salvage</option>
              </select>                            
              <select
                name="category"
                value={ this.state.category }
                onChange={ this.handleChange.bind(this) }>
                <option value="">CATEGORY</option>
                <option value="electronics">Electronics</option>
                <option value="vehicles">Vehicles</option>
                <option value="furniture">Furniture</option>
                <option value="apparel">Apparel</option>
                <option value="other">Other</option>
              </select>
              <br /> 
              <br />
              <input
                type="text" 
                name="image_url"
                placeholder="IMAGE URL"
                className="inputField"
                value={ this.state.image_url }
                onChange={ this.handleChange.bind(this) }
              />
              <br />
            <div className="submitButton">
              <button type="Submit"><strong>SUBMIT</strong></button>
             </div>
            </form>
          </div>
        </div>
      )
    };
  };


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
});

const ConnectedNewItem = connect(mapDispatchToProps, mapDispatchToProps)(NewItem);

export default ConnectedNewItem;