import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, loadSingleItem } from '../../actions/itemsActions'
import { Route, Redirect } from 'react-router-dom';

class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {  
      showDisplay: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayEditForm = this.displayEditForm.bind(this);
  }

  componentWillMount() {
    const itemId = this.props.match.params.id;
    this.props.loadSingleItem(itemId);
  }
  displayEditForm(event) {
    this.setState({
      id: this.props.singleItem.id,
      title: this.props.singleItem.title,
      description: this.props.singleItem.description,
      price: this.props.singleItem.price,
      condition: this.props.singleItem.condition,
      category: this.props.singleItem.category,
      status: this.props.singleItem.status,
      image: this.props.singleItem.image_url,
      showDisplay: true
    })
  }
  hideEditForm(event) {
    this.setState({
      showDisplay: false
    })
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(`hhhh`,this.state.title)
    this.props.editItem({
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      category: this.state.category,
      status: this.state.status
    });
    this.hideEditForm();
  }
  render() {
    if(this.state.showDisplay === false){

      return ( 
      <div className="single-item-container"> 
      <div className="item-content">
      <div className="single-item-image"> 
      <img src={ this.props.singleItem.image_url } /> </div>
      <div className="top-row">
      <div className="single-item-title"><h2>ITEM</h2>{ this.props.singleItem.title }</div>
      <div className="single-item-price"> <h2>PRICE</h2>{ this.props.singleItem.price }</div>
      <div className="single-item-condition"> <h2>CONDITION</h2> { this.props.singleItem.condition }</div>
      </div>
      <div className="middle-row">
      <div className="single-item-description">{ this.props.singleItem.description }</div>
      </div>
      
      <div className="edit-item">
      <button type="Submit" onClick={ this.displayEditForm.bind(this) }><strong>EDIT</strong></button>
     </div>
    </div>
    </div>
      )} else { return (
        <div className="form-background">

      <div className="edit-item-form">
        <form onSubmit={ this.handleSubmit.bind(this) }>
       
          <button type="button" className="close-btn" onClick={ this.hideEditForm.bind(this) }>x</button>
          <br />
            <input
              type="text"
              name="title"
              className="inputField"
              value={ this.state.title } 
              onChange={ this.handleChange.bind(this) }
              />
              <br />
              <br />
            <input
              type="text"
              name="description"
              className="inputField"
              value={ this.state.description } 
              onChange={ this.handleChange.bind(this) }
              />
              <br />
              <br />
            <input
              type="integer"
              name="price"
              className="inputField"
              value={ this.state.price } 
              onChange={ this.handleChange.bind(this) } 
              />
              <br />
              <br />
            <select
              name="condition"
              onChange={ this.handleChange.bind(this) }>
              <option value= ''>{ this.props.singleItem.condition }</option>
              <option value="new">New</option>
              <option value="like new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="salvage">Salvage</option>
            </select>
            <select
              name="category"
              onChange={ this.handleChange.bind(this) }>
              <option value= ''>{ this.props.singleItem.category }</option>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicles</option>
              <option value="Furniture">Furniture</option>
              <option value="apparel">Apparel</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <select
              name="status"
              onChange={ this.handleChange.bind(this) }>
              <option value= ''>{ this.props.singleItem.status }</option>
              <option value="published">Published</option>
              <option value="sold">Sold</option>
              <option value="deactivated">Deactivated</option>
            </select>
            <br />
            <br />
            <input 
            type="text"
            image="image_url"
            placeholder="IMAGE URL"
            className="inputField"
            value={ this.props.singleItem.image_url }
            // <img src={ this.props.singleItem.image_url } />
            onChange={ this.handleChange.bind(this) }
            />
            <br />
            <div className="submitButton">
          <button
            type="Submit"><strong>EDIT</strong></button>
            </div>
        </form>
      </div>
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    singleItem: state.items.singleItem
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editItem: (updatedItem) => {
      dispatch(editItem(updatedItem))
    },
    loadSingleItem: (id) => {
      dispatch(loadSingleItem(id))
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditItem);