import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem, loadSingleItem } from '../../actions/itemsActions'


class EditItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      price: this.props.price,
      condition: this.props.condition,
      category: this.props.category,
      status: this.props.status,
      showDisplay: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.displayEditForm = this.displayEditForm.bind(this);
  }

  componentWillMount() {
    this.props.loadSingleItem(1);
  }
  displayEditForm(event) {
    this.setState({
      showDisplay: true
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
    this.props.editItem({
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      condition: this.state.condition,
      category: this.state.category,
      status: this.state.status
    })

  }
  render() {
    if(this.state.showDisplay === false){
   
      return ( 
      
      <div className="single-item-container"> 

      <div className="single-item-title"> Title: { this.props.singleItem.title }</div>
      <div className="single-item-description"> Description: { this.props.singleItem.description }</div>
      <div className="single-item-price"> Price: { this.props.singleItem.price }</div>
      <div className="single-item-condition"> Condition: { this.props.singleItem.condition }</div>
      <div className="single-item-category"> Category: { this.props.singleItem.category }</div>
      <div className="single-item-status"> Status: { this.props.singleItem.status }</div>
      <div className="single-item-image"> Image: { this.props.singleItem.image_url }</div>
      <div className="edit-item">
     (<input type="submit" value="EDIT" onClick={this.displayEditForm.bind(this)} />)
     </div>
    </div>
      )} else { return (
      <div className="editItemForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input
              className="addInput"
              name="title"
              onChange={this.handleChange.bind(this)}
              placeholder="title"
              value={this.state.title} />
          </div>
          <div>
            <textarea
              className="addInput"
              name="description"
              onChange={this.handleChange.bind(this)}
              placeholder={this.props.description}
              value={this.state.description} />
          </div>
          <div>
            <input
              className="addInput"
              name="price"
              onChange={this.handleChange.bind(this)}
              placeholder={this.props.price}
              value={this.state.price} />
          </div>
          <div>
            <select
              className="addInput"
              name="condition"
              onChange={this.handleChange.bind(this)}>
              <option value="new">New</option>
              <option value="like new">Like New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="salvage">Salvage</option>
            </select>
          </div>
          <div>
            <select
              className="addInput"
              name="category"
              onChange={this.handleChange.bind(this)}>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicles</option>
              <option value="Furniture">Furniture</option>
              <option value="apparel">Apparel</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <select
              className="addInput"
              name="status"
              onChange={this.handleChange.bind(this)}>
              <option value="published">Published</option>
              <option value="sold">Sold</option>
              <option value="deactivated">Deactivated</option>
            </select>
          </div>
          <input
            type="submit"
            value="EDIT" />
        </form>
      </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
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